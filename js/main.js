// ============================================================
// 🧠 MAIN.JS — Shared Utilities for WOS B2C Platform
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
    // 🗂️ CATEGORY METADATA (Home page 6 cards -> DB category values)
    // ============================================================
    window.WOS_CATEGORIES = [
        {
            slug: 'hospital',
            icon: '🏥',
            image: 'images/hospital.webp',
            dbCategories: ['Hospital'],
            label: { th: 'โรงพยาบาล', lo: 'ໂຮງໝໍ', en: 'Hospitals' }
        },
        {
            slug: 'clinic',
            icon: '🩺',
            image: 'images/clinic.webp',
            dbCategories: ['Clinic'],
            label: { th: 'คลินิก & ความงาม', lo: 'ຄລີນິກ & ຄວາມງາມ', en: 'Clinics & Aesthetics' }
        },
        {
            slug: 'dental',
            icon: '🦷',
            image: 'images/dental.webp',
            dbCategories: ['Dental'],
            label: { th: 'ทันตกรรม', lo: 'ທັນຕະກຳ', en: 'Dental' }
        },
        {
            slug: 'wellness',
            icon: '🌿',
            image: 'images/wellness.webp',
            dbCategories: ['Wellness'],
            label: { th: 'เวลเนส & แพทย์ทางเลือก', lo: 'ສຸຂະພາບ & ແພດທາງເລືອກ', en: 'Wellness & Alternative Medicine' }
        },
        {
            slug: 'spa',
            icon: '💆',
            image: 'images/spa.webp',
            dbCategories: ['Spa'],
            label: { th: 'สปา & ผ่อนคลาย', lo: 'ສະປາ & ພັກຜ່ອນ', en: 'Spa & Relaxation' }
        },
        {
            slug: 'hotel_transport',
            icon: '🏨',
            image: 'images/hotel-transport.webp', // vip-transport.webp also available in /images if you'd rather lead with the car
            dbCategories: ['Hotel', 'Transport'],
            label: { th: 'โรงแรม & รถรับส่ง', lo: 'ໂຮງແຮມ & ລົດຮັບສົ່ງ', en: 'Hotels & Transport' }
        }
    ];

    window.getCategoryBySlug = function(slug) {
        return window.WOS_CATEGORIES.find(c => c.slug === slug) || null;
    };

    // ============================================================
    // 📡 DATA LAYER: Partners / Packages / Bookings
    // ============================================================

    // Fetch active partners, optionally filtered by one or more DB category values
    window.fetchPartners = async function(dbCategories) {
        if (!window.__supabase) throw new Error('Supabase client is not initialized');
        let query = window.__supabase.from('partners').select('*').eq('status', 'active');
        if (dbCategories && dbCategories.length > 0) {
            query = query.in('category', dbCategories);
        }
        const { data, error } = await query.order('rating', { ascending: false });
        if (error) throw error;
        return data;
    };

    // Fetch a single partner by id
    window.fetchPartnerById = async function(id) {
        if (!window.__supabase) throw new Error('Supabase client is not initialized');
        const { data, error } = await window.__supabase.from('partners').select('*').eq('id', id).single();
        if (error) throw error;
        return data;
    };

    // Fetch packages for a given partner (optionally only promotions)
    window.fetchPackagesByPartner = async function(partnerId, promotionsOnly) {
        if (!window.__supabase) throw new Error('Supabase client is not initialized');
        let query = window.__supabase.from('packages').select('*').eq('partner_id', partnerId);
        if (promotionsOnly) query = query.eq('is_promotion', true);
        const { data, error } = await query.order('created_at', { ascending: false });
        if (error) throw error;
        return data;
    };

    // Fetch a single package by id (with its parent partner joined)
    window.fetchPackageById = async function(id) {
        if (!window.__supabase) throw new Error('Supabase client is not initialized');
        const { data, error } = await window.__supabase
            .from('packages')
            .select('*, partners(*)')
            .eq('id', id)
            .single();
        if (error) throw error;
        return data;
    };

    // Upload a booking attachment file to Supabase Storage, returns public URL
    window.uploadBookingAttachment = async function(file) {
        if (!window.__supabase) throw new Error('Supabase client is not initialized');
        const path = `${Date.now()}_${file.name}`;
        const { error: uploadError } = await window.__supabase.storage
            .from('booking-attachments')
            .upload(path, file);
        if (uploadError) throw uploadError;
        const { data } = window.__supabase.storage.from('booking-attachments').getPublicUrl(path);
        return data.publicUrl;
    };

    // Submit a new booking
    window.submitBooking = async function(payload) {
        if (!window.__supabase) throw new Error('Supabase client is not initialized');
        const { data, error } = await window.__supabase.from('bookings').insert([payload]).select();
        if (error) throw error;
        return data;
    };

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

    // Returns the currently active language code ('th' | 'lo' | 'en')
    window.getCurrentLang = function() {
        try { return localStorage.getItem('wos-lang') || 'th'; } catch (e) { return 'th'; }
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
    // 🔗 URL QUERY HELPER
    // ============================================================
    window.getQueryParam = function(key) {
        return new URLSearchParams(window.location.search).get(key);
    };

    // ============================================================
    // 💰 CURRENCY FORMAT HELPER
    // ============================================================
    window.formatTHB = function(amount) {
        if (amount === null || amount === undefined) return '-';
        return Number(amount).toLocaleString('th-TH') + ' บาท';
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
