# WOS B2C Concierge Platform — Phase 1 MVP

ระบบ B2C สำหรับลูกค้าจองบริการ Concierge (โรงพยาบาล/คลินิก/ทันตกรรม/เวลเนส/สปา/โรงแรม+รถรับส่ง)
ดึงข้อมูลแบบ Dynamic จาก Supabase — ทีมงานเพิ่ม/แก้ไขพาร์ทเนอร์และแพ็กเกจได้เองผ่าน Supabase Dashboard
โดยไม่ต้องแก้โค้ด

## 1. ตั้งค่าฐานข้อมูล (ทำครั้งเดียว)

1. เข้า [Supabase Dashboard](https://supabase.com/dashboard) ของโปรเจกต์ `ayjtfbmatwpyoxayrpxs`
2. ไปที่ **SQL Editor** → เปิดไฟล์ `supabase-schema.sql` ในนี้ → วางทั้งหมด → กด **Run**
   - จะสร้างตาราง `partners`, `packages`, `bookings` พร้อม RLS policies
   - จะใส่ข้อมูลตัวอย่าง (demo partners + packages) ให้ทันที เพื่อทดสอบระบบได้เลย
3. ไปที่ **Storage** → สร้าง bucket ชื่อ `booking-attachments` → ตั้งเป็น **Public bucket**
   (ใช้เก็บไฟล์แนบจากฟอร์มจอง เช่น ผลตรวจ/เอกสาร)

## 2. โครงสร้างหน้าเว็บ (5 หน้า)

| หน้า | ไฟล์ | หน้าที่ |
|---|---|---|
| 1. Home | `home.html` | แสดง 6 หมวดหมู่บริการ |
| 2. Category List | `category.html?slug=hospital` | รายชื่อพาร์ทเนอร์ในหมวดหมู่ |
| 3. Partner Detail | `partner-detail.html?id=<uuid>` | ข้อมูลพาร์ทเนอร์ + รายการแพ็กเกจ |
| 4. Program Detail | `program-detail.html?id=<uuid>` | รายละเอียดโปรแกรม + ปุ่มจอง |
| 5. Booking Form | `booking.html?package_id=<uuid>` | ฟอร์มจอง 8 ข้อ → บันทึกลง `bookings` |

Flow การนำทาง: `home` → `category` → `partner-detail` → `program-detail` → `booking` (เชื่อมกันด้วย query string อัตโนมัติ ไม่ต้องแก้ลิงก์เอง)

## 3. การจัดการหลังบ้าน (Admin — Phase 1)

ใช้ **Supabase Dashboard → Table Editor** ในการ:
- เพิ่ม/แก้ไข/ปิดใช้งาน (`status = 'inactive'`) พาร์ทเนอร์ในตาราง `partners`
- เพิ่ม/แก้ไขแพ็กเกจ/โปรโมชันในตาราง `packages` (ต้องมี `partner_id` ที่ตรงกับพาร์ทเนอร์)
- ดูรายการจองใหม่ในตาราง `bookings` → กด Export เป็น CSV ได้จากปุ่มมุมขวาบนของตาราง
- อัปเดตสถานะการจอง (`pending` → `confirmed`/`cancelled`) หลังติดต่อลูกค้า

> หมายเหตุ: การแก้ไขข้อมูลผ่าน Dashboard ใช้สิทธิ์ของเจ้าของโปรเจกต์ (bypass RLS)
> ส่วนหน้าเว็บ B2C ใช้ anon key ที่มีสิทธิ์แค่ "อ่าน partner/package ที่ active" และ
> "เพิ่ม booking ใหม่" เท่านั้น ปลอดภัยสำหรับเปิดสาธารณะ

## 4. รูปภาพ

โฟลเดอร์ `images/` มีภาพตัวอย่าง (placeholder) สำหรับ partner ตัวอย่างที่สร้างไว้ในขั้นตอน seed data
เมื่อเพิ่มพาร์ทเนอร์จริง ให้อัปโหลดภาพจริงไปที่ Supabase Storage หรือโฮสต์ของคุณ แล้วนำ URL
มาใส่ในช่อง `cover_image_url` / `gallery_urls` แทน

## 5. Known Limitations (Phase 1)

- ยังไม่มี Admin Panel แบบมี Login เป็นของตัวเอง (ใช้ Supabase Dashboard ไปก่อน)
- ระบบไม่ตรวจสอบ double-booking เวลาเดียวกันอัตโนมัติ (ต้องเช็คเองตอนติดต่อกลับลูกค้า)
- ยังไม่รองรับการชำระเงินออนไลน์ (เป็นระบบจองคิว/นัดหมายเท่านั้น)
