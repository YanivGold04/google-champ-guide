// Shared JavaScript functions for all pages

// Smooth scroll to section
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navigate to tool page
function navigateToTool(page) {
    // Save current scroll position
    sessionStorage.setItem('lastScrollPosition', String(window.scrollY));
    sessionStorage.setItem('shouldRestoreScroll', 'true');
    window.location.href = page;
}

// Navigate back to home
function navigateHome() {
    window.location.href = 'index.html';
}

// Get completion status for a platform
function getPlatformCompletion(platform) {
    const completions = JSON.parse(sessionStorage.getItem('platform-completions') || '{}');
    return completions[platform] || false;
}

// Mark platform as complete
function markPlatformComplete(platform) {
    const completions = JSON.parse(sessionStorage.getItem('platform-completions') || '{}');
    completions[platform] = true;
    sessionStorage.setItem('platform-completions', JSON.stringify(completions));
    
    // Dispatch event
    window.dispatchEvent(new CustomEvent('platform-completed', { detail: { platform } }));
}

// Get completed labs for a platform
function getCompletedLabs(platform) {
    const stored = sessionStorage.getItem(`${platform}-labs-completed`);
    return stored ? new Set(JSON.parse(stored)) : new Set();
}

// Mark lab as complete
function markLabComplete(platform, labId) {
    const completedLabs = getCompletedLabs(platform);
    completedLabs.add(labId);
    sessionStorage.setItem(`${platform}-labs-completed`, JSON.stringify([...completedLabs]));
    
    // Update UI
    updateLabStatus(platform, labId);
    updateCompletionCheck(platform);
}

// Update lab status UI
function updateLabStatus(platform, labId) {
    const statusElement = document.getElementById(`status-${labId}`);
    if (statusElement) {
        statusElement.textContent = '✅ Completed';
        statusElement.classList.remove('not-started');
        statusElement.classList.add('completed');
    }
}

// Update completion check section
function updateCompletionCheck(platform) {
    const completedLabs = getCompletedLabs(platform);
    const labItems = document.querySelectorAll('.completion-item');
    
    labItems.forEach((item, index) => {
        const labId = item.dataset.labId;
        const icon = item.querySelector('i');
        
        if (completedLabs.has(labId)) {
            icon.setAttribute('data-lucide', 'check-circle-2');
            icon.style.color = 'var(--secondary)';
        } else {
            icon.setAttribute('data-lucide', 'x-circle');
            icon.style.color = 'var(--muted-foreground)';
        }
    });
    
    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Check if all labs are complete
    const expectedLabs = document.querySelectorAll('.completion-item').length;
    if (completedLabs.size >= expectedLabs) {
        showCompletionSuccess(platform);
    }
}

// Show completion success message
function showCompletionSuccess(platform) {
    const successElement = document.getElementById('completion-success');
    if (successElement) {
        successElement.style.display = 'flex';
    }
}

// Handle return to home with completion
function returnToHome(platform) {
    markPlatformComplete(platform);
    navigateHome();
}

// Listen for messages from iframes (lab completion)
window.addEventListener('message', function(event) {
    if (event.data?.type === 'lab-complete' && event.data?.lab) {
        // Extract platform and lab name from the message
        const labName = event.data.lab;
        const parts = labName.split('-');
        
        if (parts.length >= 2) {
            const platform = parts[0];
            const lab = parts.slice(1).join('-');
            markLabComplete(platform, lab);
        }
    }
});

// Update completion badges on home page
function updateCompletionBadges() {
    const platforms = ['gmail', 'drive', 'meet', 'docs', 'sheets', 'slides', 'calendar'];
    
    platforms.forEach(platform => {
        const isComplete = getPlatformCompletion(platform);
        const badge = document.getElementById(`badge-${platform}`);
        
        if (badge && isComplete) {
            const icon = badge.querySelector('i');
            if (icon) {
                icon.classList.remove('hidden');
            }
        }
    });
}

// Restore scroll position on page load
window.addEventListener('load', function() {
    const shouldRestore = sessionStorage.getItem('shouldRestoreScroll');
    const savedScroll = Number(sessionStorage.getItem('lastScrollPosition')) || 0;
    
    if (shouldRestore === 'true') {
        setTimeout(() => {
            window.scrollTo({ top: savedScroll, behavior: 'smooth' });
        }, 300);
        sessionStorage.removeItem('shouldRestoreScroll');
    }
});