
import { Heritage, Job } from './types';
import { AcademicCapIcon, BeakerIcon, BuildingOfficeIcon } from './components/Icons';

export const HERITAGE_DATA: Heritage[] = [
  {
    id: 'sungnyemun',
    name: '숭례문',
    description: '조선 시대 서울 도성의 정문이었던 숭례문이 시간의 흐름과 화재로 손상되었어요. 우리의 도움이 필요해요!',
    location: { top: '35%', left: '45%' },
    damagedImg: 'https://picsum.photos/id/101/600/400',
    restoredImg: 'https://picsum.photos/id/102/600/400',
  },
  {
    id: 'cheomseongdae',
    name: '첨성대',
    description: '신라 시대에 별을 관측하던 천문대, 첨성대가 오랜 세월 동안 비바람에 닳아 일부가 무너졌어요. 함께 복원해 볼까요?',
    location: { top: '65%', left: '75%' },
    damagedImg: 'https://picsum.photos/id/201/600/400',
    restoredImg: 'https://picsum.photos/id/202/600/400',
  },
  {
    id: 'seokguram',
    name: '석굴암',
    description: '아름다운 불교 예술의 정수인 석굴암이 습기와 시간의 흐름으로 인해 조금씩 손상되고 있어요. 우리가 지켜줘야 해요!',
    location: { top: '70%', left: '85%' },
    damagedImg: 'https://picsum.photos/id/301/600/400',
    restoredImg: 'https://picsum.photos/id/302/600/400',
  },
];

export const JOB_DATA: Job[] = [
  {
    id: 'conservator',
    title: '문화재 보존과학자',
    description: '문화재 보존과학자는 아픈 문화재를 치료하는 의사 선생님 같아요. 과학 기술을 이용해서 문화재가 더 이상 손상되지 않도록 보호하고, 원래의 모습을 되찾을 수 있도록 도와주는 아주 중요한 일을 해요.',
    icon: BeakerIcon,
  },
  {
    id: 'architect',
    title: '전통 건축가',
    description: '전통 건축가는 숭례문처럼 오래된 건물을 수리하고 복원하는 전문가예요. 옛날 사람들이 사용했던 기술과 재료를 연구해서, 무너진 부분을 원래 모습 그대로 다시 튼튼하게 만들어준답니다.',
    icon: BuildingOfficeIcon,
  },
  {
    id: 'historian',
    title: '역사학자',
    description: '역사학자는 옛날 기록을 연구해서 문화재가 언제, 어떻게 만들어졌는지 알아내는 탐정 같아요. 이분들의 연구 덕분에 우리는 문화재를 더 정확하게 복원하고 그 가치를 제대로 알 수 있게 돼요.',
    icon: AcademicCapIcon,
  },
];
