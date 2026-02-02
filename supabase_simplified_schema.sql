-- 지원 양식 축소에 따른 Supabase 반영
-- Supabase 대시보드 > SQL Editor에서 실행하세요.
-- (컬럼이 없으면 해당 문장은 에러가 나므로 그 줄만 건너뛰면 됩니다.)

-- 제거된 필드를 NULL 허용으로 변경 (insert 시 해당 컬럼을 안 넣어도 됨)
ALTER TABLE applications ALTER COLUMN address DROP NOT NULL;
ALTER TABLE applications ALTER COLUMN website DROP NOT NULL;
ALTER TABLE applications ALTER COLUMN achievements DROP NOT NULL;
ALTER TABLE applications ALTER COLUMN patents DROP NOT NULL;
ALTER TABLE applications ALTER COLUMN certifications DROP NOT NULL;

-- 선택: 사용하지 않는 컬럼을 완전히 제거하려면 아래 실행
-- ALTER TABLE applications DROP COLUMN IF EXISTS address;
-- ALTER TABLE applications DROP COLUMN IF EXISTS website;
-- ALTER TABLE applications DROP COLUMN IF EXISTS achievements;
-- ALTER TABLE applications DROP COLUMN IF EXISTS patents;
-- ALTER TABLE applications DROP COLUMN IF EXISTS certifications;

-- 현재 제출 시 저장되는 컬럼:
-- company_name, representative, business_number, contact_person, position,
-- phone, email, website, cooperation_fields, cooperation_detail, company_overview, technology
-- 첨부 파일: businessLicense(필수), companyProfile(선택), technologyProof(필수) → application_files 테이블
