// Apex Academy - shared interactions

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

function openPortalModal(e) {
    if (e) e.preventDefault();

    const content = `
        <div class="text-center">
            <div class="w-16 h-16 bg-gold-100 text-gold-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                <i class="fa-solid fa-user-lock"></i>
            </div>
            <h3 class="text-2xl font-bold text-navy-950 mb-2">Student & Parent Portal</h3>
            <p class="text-slate-600 text-sm mb-6">Access grades, attendance records, homework assignments, and tuition statements.</p>
            <form onsubmit="handlePortalLogin(event)" class="space-y-4 text-left">
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Username / Student ID</label>
                    <input type="text" required class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-gold-500" placeholder="e.g. apex2026_js">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Password</label>
                    <input type="password" required class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-gold-500" placeholder="••••••••">
                </div>
                <button type="submit" class="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-3 rounded-xl text-sm shadow transition-colors">Sign In to Portal</button>
            </form>
        </div>
    `;
    showModal(content);
}

function openTourModal(e) {
    if (e) e.preventDefault();

    const content = `
        <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                <i class="fa-solid fa-calendar-days"></i>
            </div>
            <h3 class="text-2xl font-bold text-navy-950 mb-2">Schedule a Campus Tour</h3>
            <p class="text-slate-600 text-sm mb-6">Choose a convenient date to experience our world-class facilities in person.</p>
            <form onsubmit="handleTourSubmit(event)" class="space-y-4 text-left">
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                    <input type="text" required class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-gold-500" placeholder="Parent or Student Name">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                    <input type="date" required class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-gold-500">
                </div>
                <button type="submit" class="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-3 rounded-xl text-sm shadow transition-colors">Confirm Tour Booking</button>
            </form>
        </div>
    `;
    showModal(content);
}

function showArticleModal(title, text) {
    const content = `
        <div>
            <span class="bg-gold-100 text-gold-800 text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">News Announcement</span>
            <h3 class="text-2xl font-bold text-navy-950 mb-3">${title}</h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">${text}</p>
            <button onclick="closeModal()" class="w-full bg-navy-900 text-white font-semibold py-2.5 rounded-xl text-sm">Close</button>
        </div>
    `;
    showModal(content);
}

function showModal(content) {
    const modal = document.getElementById('custom-modal');
    const modalContent = document.getElementById('modal-content');
    if (!modal || !modalContent) return;
    modalContent.innerHTML = content;
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('custom-modal');
    if (modal) modal.classList.add('hidden');
}

function alertBox(msg) {
    const content = `
        <div class="text-center">
            <div class="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <h3 class="text-xl font-bold text-navy-950 mb-2">Success!</h3>
            <p class="text-slate-600 text-sm mb-6">${msg}</p>
            <button onclick="closeModal()" class="w-full bg-navy-900 text-white font-semibold py-2.5 rounded-xl text-sm">Okay</button>
        </div>
    `;
    showModal(content);
}

function handleContactSubmit(e) {
    e.preventDefault();
    alertBox('Thank you! Your message has been sent to our admissions team.');
}

function handleNewsletter(e) {
    e.preventDefault();
    alertBox('Thank you for subscribing to Apex Academy updates!');
    e.target.reset();
}

function handlePortalLogin(e) {
    e.preventDefault();
    alertBox('Demo Portal Login successful! Redirecting to student dashboard...');
}

function handleTourSubmit(e) {
    e.preventDefault();
    alertBox('Tour successfully requested! We will email you confirmation details shortly.');
}

// Close modal when clicking the backdrop.
document.addEventListener('click', (e) => {
    const modal = document.getElementById('custom-modal');
    if (modal && e.target === modal) closeModal();
});

// Highlight the current page and close the mobile drawer after navigation.
document.addEventListener('DOMContentLoaded', () => {
    const current = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-btn, .mobile-nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === current) {
            link.classList.add('text-white', 'bg-navy-800/80');
            link.classList.remove('text-slate-300');
        }
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            if (menu) menu.classList.add('hidden');
        });
    });
});
