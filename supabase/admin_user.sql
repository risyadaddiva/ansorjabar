-- =========================================================
-- MEMBUAT AKUN ADMIN DI SUPABASE VIA SQL EDITOR (VERSI PERBAIKAN REVISI 2)
-- Jalankan query ini di: Supabase Dashboard > SQL Editor > New query
-- =========================================================

create extension if not exists pgcrypto;

do $$
declare
  new_user_id uuid := gen_random_uuid();
  admin_email text := 'admin@ansorjabar.or.id';    -- EMAIL ADMIN
  admin_pass  text := 'PasswordAdmin123!';         -- KATA SANDI ADMIN
begin
  -- Hapus user lama jika sempat terbentuk separuh tanpa identity
  delete from auth.users where email = admin_email;

  -- 1. Buat User baru
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
    updated_at
  )
  values (
    '00000000-0000-0000-0000-000000000000',
    new_user_id,
    'authenticated',
    'authenticated',
    admin_email,
    crypt(admin_pass, gen_salt('bf')),
    now(),
    now(),
    now(),
    '{"provider":"email","providers":["email"]}',
    '{"nama":"Admin PW GP Ansor Jabar"}',
    false,
    now(),
    now()
  );

  -- 2. Buat Identity dengan provider_id
  insert into auth.identities (
    id,
    provider_id,
    user_id,
    identity_data,
    provider,
    last_sign_in_at,
    created_at,
    updated_at
  )
  values (
    new_user_id,
    new_user_id::text,
    new_user_id,
    format('{"sub":"%s","email":"%s"}', new_user_id, admin_email)::jsonb,
    'email',
    now(),
    now(),
    now()
  );

  raise notice '✅ User admin % berhasil dibuat!', admin_email;
end $$;
