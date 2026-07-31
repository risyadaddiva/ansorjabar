-- =========================================================
-- CARA MEMBUAT AKUN ADMIN DI SUPABASE VIA SQL EDITOR
-- Jalankan query ini di: Supabase Dashboard > SQL Editor > New query
-- =========================================================

-- 1. Pastikan ekstensi pgcrypto aktif untuk enkripsi password
create extension if not exists pgcrypto;

-- 2. Tambahkan User Admin ke auth.users
-- Ubah 'admin@ansorjabar.or.id' dan 'PasswordAdmin123!' sesuai keinginan Anda
insert into auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  created_at,
  updated_at,
  phone,
  phone_confirmed_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
)
values (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@ansorjabar.or.id', -- EMAIL ADMIN
  crypt('PasswordAdmin123!', gen_salt('bf')), -- KATA SANDI ADMIN
  now(),
  now(),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{"nama":"Admin PW GP Ansor Jabar"}',
  false,
  now(),
  now(),
  null,
  null,
  '',
  '',
  '',
  ''
)
on conflict (email) do nothing;

-- 3. Update identitas user agar bisa login via email
insert into auth.identities (
  id,
  user_id,
  identity_data,
  provider,
  last_sign_in_at,
  created_at,
  updated_at
)
select
  id,
  id,
  format('{"sub":"%s","email":"%s"}', id, email)::jsonb,
  'email',
  now(),
  now(),
  now()
from auth.users
where email = 'admin@ansorjabar.or.id'
on conflict (provider, id) do nothing;
