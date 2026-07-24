// ============================================================
// 🧠 MAIN.JS — Shared Utilities for WOS Platform
// ============================================================

(function() {
    'use strict';

    // ============================================================
    // 🔑 SUPABASE CONFIG (Shared)
    // ============================================================
    const SUPABASE_URL = 'https://ayjtfbmatwpyoxayrpxs.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_hCMmgE8MmleH203P1Vfykg_riuaVQip';

    window.__supabaseConfig = {
        url: SUPABASE_URL,
        anonKey: SUPABASE_ANON_KEY
    };

    let supabase = null;
    if (typeof window.supabase !== 'undefined') {
        try {
            supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            console.log('✅ Supabase shared client ready');
        } catch (e) {
            console.warn('⚠️ Supabase init failed:', e);
        }
    }

    window.__supabase = supabase;

    // ============================================================
    // 📋 FORM HELPER: Show status message
    // ============================================================
    window.showFormStatus = function(element, message, type) {
        if (!element) return;
        element.textContent = message;
        element.className = 'text-center text-sm font-medium mt-4 p-3 rounded-xl ' +
            (type === 'success' ? 'text-emerald-700 bg-emerald-50' :
             type === 'error' ? 'text-red-700 bg-red-50' :
             'text-amber-700 bg-amber-50');
        element.classList.remove('hidden');
    };

    // ============================================================
    // 📤 SUBMIT HELPER: Insert case into Supabase
    // ============================================================
    window.submitWosCase = async function(payload) {
        if (!window.__supabase) {
            throw new Error('Supabase client is not initialized');
        }
        const { data, error } = await window.__supabase.from('cases').insert([payload]);
        if (error) throw error;
        return data;
    };

    // ============================================================
    // ✅ VALIDATION HELPER: Validate required fields
    // ============================================================
    window.validateRequiredFields = function(fieldIds) {
        let isValid = true;
        fieldIds.forEach(id => {
            const el = document.getElementById(id);
            if (el && el.hasAttribute('required') && !el.value.trim()) {
                el.classList.add('error');
                isValid = false;
            } else if (el) {
                el.classList.remove('error');
            }
        });
        return isValid;
    };

    // ============================================================
    // 🌐 LANGUAGE SWITCHER (Shared)
    // ============================================================
    window.initLanguageSwitcher = function() {
        const langBtns = document.querySelectorAll('.lang-btn');
        const langContents = document.querySelectorAll('.lang-content');

        if (langBtns.length === 0) return;

        function setLanguage(lang) {
            langBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.lang === lang);
            });
            langContents.forEach(el => {
                el.classList.toggle('active', el.dataset.lang === lang);
            });
            document.documentElement.lang = lang;
            try { localStorage.setItem('wos-lang', lang); } catch (e) {}
        }

        langBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                setLanguage(this.dataset.lang);
            });
        });

        const savedLang = localStorage.getItem('wos-lang') || 'th';
        setLanguage(savedLang);
    };

    // ============================================================
    // 📅 DATE INPUT: Set min to today (dynamic, never goes stale)
    // ============================================================
    window.initDateMinToday = function() {
        const today = new Date().toISOString().split('T')[0];
        document.querySelectorAll('input[type="date"]').forEach(function(input) {
            input.min = today;
        });
    };

    // ============================================================
    // 🚀 AUTO-INIT
    // ============================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            window.initLanguageSwitcher();
            window.initDateMinToday();
        });
    } else {
        window.initLanguageSwitcher();
        window.initDateMinToday();
    }

})();