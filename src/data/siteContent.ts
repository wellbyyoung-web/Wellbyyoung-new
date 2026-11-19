export type InquiryMode = 'lecture' | 'consultation';

export interface ImageSlotConfig {
  /** 실제 사진 확보 시 public 폴더 경로(예: '/images/hero-table.jpg')를 입력하면 자동으로 사진이 표시됩니다. */
  imageSrc?: string;
  imageAlt: string;
  slotLabel: string;
  slotHint: string;
  motif: 'table' | 'lecture' | 'consultation' | 'portrait';
}

export const SITE_META = {
  brandName: '웰바이영 건강상담소',
  brandEnglish: 'Well by Young',
  slogan: '일상의 활력을 설계하다.',
  specialistName: '박혜영 영양사',
  specialistRole: '대표 영양사',
};

export const NAV_LINKS = [
  { id: 'about', label: '웰바이영 소개', href: '#about' },
  { id: 'education', label: '영양교육·강의', href: '#education' },
  { id: 'consultation', label: '심층 영양상담', href: '#consultation' },
  { id: 'resources', label: '영양정보', href: '#resources' },
] as const;

export const HERO_CONTENT = {
  kicker: '웰바이영 건강상담소 · 일상의 활력을 설계하다',
  title: '건강한 일상을 위한 영양의 지혜',
  subtitle: '전문 영양사의 교육과 상담으로 건강한 변화를 함께합니다.',
  paragraphs: [
    '웰바이영은 과학적 영양 지식과 현장 경험을 바탕으로 영양교육과 개인별 심층 영양상담을 제공합니다.',
    '올바르게 배우고, 자신의 건강을 이해하며, 일상에서 실천하는 영양관리. 그 여정에 웰바이영이 함께하겠습니다.',
  ],
  ctaLecture: '영양교육·강의 알아보기',
  ctaConsultation: '심층 영양상담 알아보기',
  photo: {
    imageSrc: undefined,
    imageAlt: '자연광이 들어오는 따뜻한 식탁과 균형 잡힌 제철 식재료',
    slotLabel: '일상의 건강한 식탁',
    slotHint: '자연광 아래 균형 잡힌 식재료와 식탁 사진 등록 영역',
    motif: 'table',
  } satisfies ImageSlotConfig,
};

export const PHILOSOPHY_CONTENT = {
  sectionLabel: '브랜드 철학',
  title: '올바른 영양 지식이 건강한 일상을 만듭니다.',
  highlights: [
    '올바른 영양 지식',
    '개인의 차이를 존중하는 접근',
    '지속 가능한 건강한 식생활',
  ],
  leadParagraph:
    '건강한 삶의 출발점은 자신의 몸과 식생활을 올바르게 이해하는 데 있습니다. 우리는 수많은 건강정보 속에서 무엇이 자신에게 필요한지 판단하기 어려운 시대를 살아가고 있습니다.',
  bodyParagraphs: [
    '웰바이영은 과학적 영양 지식과 현장 경험을 바탕으로 올바른 영양 정보를 전달하고, 개인의 건강 상태와 생활환경을 고려한 영양관리 방향을 제시합니다.',
    '영양교육을 통해 건강을 이해하는 시야를 넓히고, 전문상담을 통해 개인에게 필요한 실천 방법을 함께 찾아갑니다.',
    '특정 식품이나 영양보충제에 의존하기보다 균형 잡힌 식생활을 바탕으로 스스로 건강을 관리할 수 있는 힘을 기르는 것. 이것이 웰바이영이 추구하는 가치입니다.',
  ],
  mission: {
    label: 'Mission',
    title: '사명',
    description:
      '전문적인 영양교육과 개인별 심층상담을 통해 올바른 영양 지식이 건강한 생활습관으로 이어지도록 돕습니다.',
  },
  vision: {
    label: 'Vision',
    title: '비전',
    description:
      '누구나 신뢰할 수 있는 영양 지식을 배우고, 필요할 때 전문적인 도움을 받을 수 있는 환경을 만들어갑니다. 웰바이영은 영양학의 전문성과 일상의 실천을 연결하는 교육·상담 전문 브랜드로 성장하고자 합니다.',
  },
  coreValues: [
    {
      index: '01',
      title: '전문성',
      description: '영양학적 근거와 상담·교육 경험을 바탕으로 신뢰할 수 있는 정보를 제공합니다.',
    },
    {
      index: '02',
      title: '실용성',
      description: '일상에서 적용할 수 있는 영양 지식과 관리 방법을 전달합니다.',
    },
    {
      index: '03',
      title: '개별성',
      description: '개인의 식생활과 건강 상태, 생활환경의 차이를 존중합니다.',
    },
    {
      index: '04',
      title: '지속 가능성',
      description: '단기적인 변화보다 스스로 유지할 수 있는 건강한 습관 형성을 지향합니다.',
    },
  ],
};

export const SERVICES_CONTENT = {
  sectionLabel: '핵심 서비스',
  sectionTitle: '교육과 상담, 두 가지 전문 영역',
  sectionIntro:
    '웰바이영 건강상담소는 기관·단체를 위한 영양교육·강의와 개인을 위한 심층 영양상담을 각각의 전문 영역으로 운영합니다.',
  education: {
    code: 'SERVICE 01',
    englishTitle: 'Nutrition Education',
    categoryTitle: '영양교육 및 강의',
    title: '지식을 넘어, 일상의 실천으로',
    paragraphs: [
      '웰바이영은 영양학적 전문지식과 상담 현장에서 축적한 경험을 바탕으로 다양한 대상에게 실용적인 영양교육을 제공합니다.',
      '복잡한 영양 정보를 이해하기 쉽게 전달하고, 배운 내용을 일상에서 실천할 수 있도록 돕습니다.',
    ],
    targetsTitle: '교육 대상',
    targets: [
      '공공기관 및 기업',
      '평생교육기관 및 지역사회 단체',
      '일반 성인 및 중장년층',
      '건강과 영양관리에 관심 있는 소규모 그룹',
    ],
    topicsTitle: '강의 분야 예시',
    topics: [
      '건강한 식생활과 균형 잡힌 영양 섭취',
      '중장년기 영양관리',
      '영양보충제의 올바른 이해와 안전한 활용',
      '생활습관과 영양관리',
      '일상에서 실천하는 건강한 식습관',
    ],
    customNote: '강의 주제는 의뢰 기관의 특성과 교육 목적에 따라 맞춤형으로 조정하여 설계합니다.',
    ctaLabel: '강의 의뢰하기',
    photo: {
      imageSrc: undefined,
      imageAlt: '자연광이 드는 차분한 영양교육 및 강의 공간',
      slotLabel: '영양교육 및 강의 현장',
      slotHint: '강의실 전경 또는 교육 진행 사진 등록 영역',
      motif: 'lecture',
    } satisfies ImageSlotConfig,
  },
  consultation: {
    code: 'SERVICE 02',
    englishTitle: 'Personalized Nutrition Consultation',
    categoryTitle: '개인별 심층 영양상담',
    title: '개인의 상황을 깊이 이해하는 영양상담',
    paragraphs: [
      '일반적인 영양 정보만으로는 관리 방향을 정하기 어려운 분들을 위해 개인별 심층 영양상담을 제공합니다.',
      '개인의 식생활과 영양 섭취 현황, 생활환경 및 건강 관련 정보를 종합적으로 살펴보고, 일상에서 실천할 수 있는 영양관리 방향을 함께 모색합니다.',
    ],
    targetsTitle: '상담 대상',
    targets: [
      '지속적이거나 복합적인 건강상의 어려움으로 영양관리에 도움이 필요한 분',
      '여러 생활습관과 영양 문제가 복합적으로 나타나는 분',
      '의료기관의 진료와 별도로 일상적인 영양관리에 대한 교육과 지원이 필요한 분',
    ],
    principlesTitle: '상담 운영 원칙',
    principles: [
      '상담상품은 단일 심층상담 서비스로 구성합니다.',
      '단순 영양제 추천이나 일반적인 식습관 점검만을 위한 상담은 운영하지 않습니다.',
      '상담 전 사전 확인을 통해 서비스 적합성을 판단합니다.',
      '식품을 통한 균형 잡힌 영양 섭취를 기본으로 합니다.',
      '영양보충제는 필요성과 안전성을 고려해 보조적인 수단으로 다룹니다.',
      '질환의 진단·치료 및 의학적 영양치료는 제공하지 않습니다.',
      '의료적 평가가 필요한 경우 의료기관 이용을 우선 안내합니다.',
    ],
    scheduleNote:
      '상담 비용, 소요 시간 및 세부 진행 방식은 운영 기준 확정 후 투명하게 안내될 예정입니다.',
    ctaLabel: '심층 영양상담 문의하기',
    photo: {
      imageSrc: undefined,
      imageAlt: '차분하고 따뜻한 일대일 영양상담실 공간',
      slotLabel: '개인별 심층 상담 공간',
      slotHint: '차분한 상담실 전경 사진 등록 영역',
      motif: 'consultation',
    } satisfies ImageSlotConfig,
  },
};

export const EXPERTISE_CONTENT = {
  sectionLabel: '웰바이영의 전문성',
  title: '전문지식에 현장의 경험을 더합니다.',
  specialistName: '박혜영',
  specialistTitle: '대표 영양사',
  quote:
    '영양에 관한 지식은 많아졌지만, 그 정보를 자신의 생활에 어떻게 적용해야 하는지 판단하기는 여전히 어렵습니다.',
  description:
    '웰바이영은 영양학적 전문지식과 다양한 상담 경험을 바탕으로, 복잡한 영양 정보를 이해하기 쉽게 전달하고 개인의 상황에 맞는 실천 방향을 함께 고민합니다.',
  credentialsTitle: '자격 및 주요 경력',
  credentials: [
    { category: '면허', detail: '영양사' },
    { category: '학위', detail: '미용의학 석사' },
    { category: '상담 경력', detail: '제약회사 상담영양사 경력 7년' },
    { category: '상담 경력', detail: '약국 상담영양사 경력 8년' },
    { category: '교육 활동', detail: '영양 및 건강 관련 강의 경험' },
  ],
  verificationNote:
    '경력의 중복 여부, 정확한 근무 기간, 세부 학위명 등은 최종 확인 절차에 따라 보완 및 표기될 예정이며, 실제 보유 자격과 확인 가능한 경력만을 게시합니다.',
  photo: {
    imageSrc: '/assets/aistudio/file_00000000df348211bccc2afa177b7b0d_ae30def9.png',
    imageAlt: '웰바이영 건강상담소 박혜영 대표 영양사 프로필 사진',
    slotLabel: '대표 영양사 박혜영',
    slotHint: '대표 영양사 프로필 사진 등록 영역',
    motif: 'portrait',
  } satisfies ImageSlotConfig,
};

export const RESOURCES_CONTENT = {
  sectionLabel: '영양정보 및 콘텐츠',
  title: '건강한 일상을 위한 영양 이야기',
  subtitle:
    '유튜브 콘텐츠와 건강칼럼을 통해 일상에서 바로 참고할 수 있는 신뢰성 있는 영양 이야기를 전할 예정입니다.',
  topics: [
    {
      id: 'diet',
      title: '영양과 식생활',
      summary: '균형 잡힌 식사의 기본 원리와 하루 식단을 건강하게 구성하는 실용적인 기준을 다룹니다.',
      focusPoints: [
        '식품을 통한 필수 영양소 균형 이해하기',
        '무리한 제한 대신 유지 가능한 일상 식단 설계',
        '계절과 생활 패턴에 맞춘 식재료 선택 기준',
      ],
    },
    {
      id: 'supplements',
      title: '영양보충제의 올바른 이해',
      summary: '과장된 효능 홍보에서 벗어나, 보충제의 역할과 안전성, 필요 여부를 판단하는 기준을 안내합니다.',
      focusPoints: [
        '식사 보완 수단으로서의 영양보충제 이해',
        '성분·함량·섭취 목적을 점검하는 객관적 기준',
        '중복 섭취 및 안전성 확인 시 유의할 점',
      ],
    },
    {
      id: 'midlife',
      title: '중장년 건강관리',
      summary: '연령대 변화에 따른 신체 대사와 영양 요구량의 차이를 이해하고 일상적인 식생활 관리법을 나눕니다.',
      focusPoints: [
        '중장년기 신체 변화에 맞춘 단백질·미량영양소 관리',
        '소화 기능과 활동량을 고려한 식사 리듬 정돈',
        '지속 가능한 건강 습관 형성을 위한 식생활 원칙',
      ],
    },
    {
      id: 'lifestyle',
      title: '생활습관과 영양',
      summary: '수면, 활동량, 스트레스, 식사 시간 등 일상 전반의 생활습관과 영양 상태의 연결고리를 살펴봅니다.',
      focusPoints: [
        '불규칙한 생활 리듬 속 현실적인 식사 관리',
        '수분 섭취와 일상 에너지 균형 유지하기',
        '개인의 생활환경을 존중하는 단계적 습관 개선',
      ],
    },
  ],
  channels: [
    {
      id: 'youtube',
      platform: 'YouTube',
      title: '웰바이영 영양교육 영상',
      description:
        '영양과 식생활, 영양보충제의 올바른 이해 등 핵심 주제를 차분하고 이해하기 쉽게 풀어내는 영상 채널을 연결하는 영역입니다.',
      url: '',
      statusText: '채널 연동 준비 중',
      actionLabel: '유튜브 채널 연결 예정',
    },
    {
      id: 'blog',
      platform: 'Health Column',
      title: '건강칼럼 및 블로그 아카이브',
      description:
        '과학적 근거를 바탕으로 정리한 영양 칼럼과 일상 식생활 가이드를 읽어보실 수 있도록 블로그 콘텐츠를 연결하는 영역입니다.',
      url: '',
      statusText: '아카이브 연동 준비 중',
      actionLabel: '건강칼럼 연결 예정',
    },
  ],
  emptyNotice:
    '현재 공식 콘텐츠 채널 개설 및 아카이브 연동 준비 단계입니다. 실제 콘텐츠가 게시되기 전까지 임의의 게시물이나 조회수를 표시하지 않습니다.',
};

export const CONTACT_CONTENT = {
  sectionLabel: '문의 및 의뢰',
  title: '건강한 변화를 위한 첫걸음',
  subtitle:
    '목적에 따라 강의 의뢰와 개인별 심층 영양상담 문의를 구분하여 접수 구조를 안내합니다.',
  testUiNotice:
    '현재 본 문의 화면은 실제 전송 기능(백엔드·메일·Netlify Forms) 연동 전 단계의 테스트용 UI입니다. 작성하신 내용은 외부로 전송되거나 저장되지 않으며, 제출 확인 시 입력 요약 및 복사 기능을 확인할 수 있습니다.',
  lectureTab: {
    label: '강의 의뢰',
    description:
      '공공기관, 기업, 평생교육기관, 지역사회 단체 및 소규모 그룹 대상의 영양교육·강의 문의를 위한 양식입니다.',
    audienceOptions: [
      '공공기관 및 지자체',
      '기업 임직원',
      '평생교육기관 및 지역사회 단체',
      '일반 성인 및 중장년층',
      '소규모 그룹 및 모임',
      '기타 대상',
    ],
    topicOptions: [
      '건강한 식생활과 균형 잡힌 영양 섭취',
      '중장년기 영양관리',
      '영양보충제의 올바른 이해와 안전한 활용',
      '생활습관과 영양관리',
      '일상에서 실천하는 건강한 식습관',
      '기관 맞춤형 주제 협의 희망',
    ],
  },
  consultationTab: {
    label: '심층 영양상담 문의',
    description:
      '개인의 식생활과 생활환경을 바탕으로 일상에서 실천할 수 있는 영양관리 방향을 모색하는 심층 상담 문의 양식입니다.',
    sensitiveWarningTitle: '민감한 건강정보 입력 자제 안내',
    sensitiveWarningBody:
      '문의 단계에서는 정확한 질환명, 상세 병력, 복용 중인 약물명 등 민감한 의료·건강정보를 불필요하게 기재하지 말아 주시기 바랍니다. 상담 적합성 사전 확인을 위해 일상 식생활이나 영양관리에서 느끼는 어려움 등 간략한 배경만 작성해 주세요.',
  },
  privacyPolicy: {
    title: '개인정보 수집·이용 안내 및 동의',
    items: [
      '수집 항목: (강의 의뢰) 기관명, 담당자 정보, 연락처, 교육 관련 기본 사항 / (상담 문의) 성함, 연락처, 간략한 상담 목적',
      '이용 목적: 영양교육·강의 협의 및 심층 영양상담 사전 적합성 확인·안내',
      '보유 및 이용 기간: 문의 처리 완료 후 관련 법령 및 내부 운영 기준에 따라 안전하게 파기',
      '동의 거부 권리: 개인정보 수집·이용에 동의하지 않으실 수 있으며, 미동의 시 문의 접수 확인이 제한될 수 있습니다.',
    ],
    checkboxLabel: '위 개인정보 수집·이용 안내를 확인하였으며, 이에 동의합니다.',
  },
};
