<template>
  <div class="moncat-factory-info">
    <header class="logo-section">
      <h1 class="logo-text">
        <span class="logo-icon">M</span>
        <span class="logo-brand">moncat factory</span> 
      </h1>
    </header>

    <div class="details-section">
      <div class="contact-info">
        <p>
          <span class="label">대표이사</span> {{ companyInfo.ceo }}
          <span class="separator">|</span>
          <span class="label">사업자등록번호</span> {{ companyInfo.bizRegNo }}
        </p>
        <p>
          <span class="label">Tel</span> {{ companyInfo.tel }}
          <span class="separator">|</span>
          <span class="label">Fax</span> {{ companyInfo.fax }}
          <span class="separator">|</span>
          <span class="label">E-mail</span>
          <a :href="'mailto:' + companyInfo.email">{{ companyInfo.email }}</a>
        </p>
      </div>

      <div class="address-list">
        <div v-for="(address, index) in addresses" :key="index" class="address-item">
          <p class="address-type">{{ address.type }}</p>
          <p class="address-detail">{{ address.detail }}</p>
        </div>
      </div>
    </div>

    <footer class="copyright">
      <p>Copyright © 2023 YOU-HOST. co.Ltd. All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MoncatFactoryInfo',
  data() {
    return {
      // 이미지에서 추출한 기본 회사 및 연락처 정보
      companyInfo: {
        ceo: '이은재',
        bizRegNo: '119-81-86772',
        tel: '02-523-3975',
        fax: '02-523-3971',
        email: 'lab@youhost.co.kr',
      },
      // 이미지에서 추출한 주소 목록
      addresses: [
        { type: '본사', detail: '서울특별시 서초구 남부순환로 2496, 왕윤빌딩 6층' },
        { type: '인천지사', detail: '인천광역시 미추홀구 고지미로 62번길 7, 한국산업단지공단 501호' },
        { type: '경북지사', detail: '경북 구미시 수출대로 127, 한국산업단지공단 본관 1층' },
        { type: '전남지사', detail: '전라남도 목포시 석포로 백련지로 4로 10, 전남지식재산센터 A동 607호' },
        { type: '전북지사', detail: '전라북도 전주시 덕진구 중가모로 81, 더블유지식재산센터 1002호' },
        { type: '군산지사', detail: '전라북도 군산시 산단남북로 169, R&D센터 305호' },
      ],
    };
  },
};
</script>

<style scoped>
/* 이미지의 다크한 배경 스타일을 재현합니다. */
.moncat-factory-info {
  background-color: #2e2e2e; /* 이미지의 진한 회색 배경 */
  color: #cccccc; /* 밝은 회색 텍스트 색상 */
  padding: 30px;
  font-family: Arial, sans-serif;
}

/* 로고 섹션 스타일 */
.logo-section {
  border-bottom: 1px solid #444; /* 하단 구분선 (선택 사항) */
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 0;
}

.logo-icon {
  color: #1a73e8; /* 이미지 로고의 파란색 부분 */
  margin-right: 5px;
}

.logo-brand {
  color: #ffffff;
}

/* 상세 정보 섹션 스타일 */
.details-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

/* 연락처 정보 스타일 */
.contact-info p {
  margin: 5px 0;
  font-size: 14px;
  line-height: 1.5;
}

.contact-info .label {
  font-weight: bold;
  color: #fff; /* 레이블 강조 */
}

.contact-info .separator {
  margin: 0 10px;
  color: #555;
}

.contact-info a {
  color: #cccccc;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

/* 주소 목록 스타일 */
.address-list {
  /* 주소 목록은 본사부터 시작하므로 그대로 플렉스 컬럼 유지 */
  display: flex;
  flex-direction: column;
  width: 50%; /* 오른쪽 영역 확보 */
  font-size: 14px;
}

.address-item {
  margin-bottom: 5px;
  line-height: 1.5;
}

.address-type {
  font-weight: bold;
  color: #ffffff; /* 주소 구분 (본사, 지사) 강조 */
  display: inline-block;
  min-width: 60px; /* 주소 종류 너비 통일 */
  margin-right: 10px;
}

.address-detail {
  display: inline;
}

/* 저작권 정보 스타일 */
.copyright {
  border-top: 1px solid #444;
  padding-top: 20px;
  text-align: left;
  font-size: 12px;
  color: #888;
}
</style>