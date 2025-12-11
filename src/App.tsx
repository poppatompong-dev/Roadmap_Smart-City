import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Leaf, 
  HeartPulse, 
  TrendingUp, 
  Database, 
  Landmark,
  Coins,
  Wallet,
  X,
  Search,
  ChevronRight,
  FileText,
  Target,
  Award,
  Briefcase
} from 'lucide-react';

// Define Interface for project details
interface ProjectDetail {
  name: string;
  objective: string;
  target: string;
  expectedResult: string;
  responsibleAgency: string;
  budget: string;
  budgetDetails?: string; // Optional field for yearly breakdown
}

interface Strategy {
  id: string;
  title: string;
  thaiTitle: string;
  budget: string;
  icon: React.ReactNode;
  color: string;
  accent: string;
  lightColor: string;
  shadow: string;
  text: string;
  description: string;
  details: ProjectDetail[];
}

const SmartCityBudgetModal = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);

  // ข้อมูลโครงการปรับปรุงปีงบประมาณเป็น 2569 - 2570
  // คำนวณยอดรวมใหม่:
  // Governance: 3,993,860
  // People: 1,300,000
  // Environment: 1,372,500
  // Living: 2,968,904
  // Economy: 700,000
  // Platform: 800,000
  // Total: 11,135,264
  const strategies: Strategy[] = [
    {
      id: 'governance',
      title: 'Smart Governance',
      thaiTitle: 'บริหารภาครัฐอัจฉริยะ',
      budget: '3,993,860',
      icon: <Landmark size={40} />,
      color: 'bg-blue-400',
      accent: 'text-blue-600',
      lightColor: 'bg-blue-50',
      shadow: 'shadow-blue-600',
      text: 'text-blue-900',
      description: 'มุ่งเน้นความโปร่งใสและการบริการที่รวดเร็ว',
      details: [
        { 
          name: 'จ้างเหมาที่ปรึกษาจัดทำแผน Smart City', 
          objective: '🎯 เพื่อจัดทำข้อเสนอขอตราสัญลักษณ์เมืองอัจฉริยะ ให้สอดคล้องกับนโยบายและเกณฑ์การประเมิน', 
          target: '🏁 สามารถส่งข้อเสนอขอตราสัญลักษณ์เมืองอัจฉริยะ และได้รับการประเมิน HPA ตามเกณฑ์',
          expectedResult: '✨ เทศบาลได้รับการประกาศเป็นเขตส่งเสริมเมืองอัจฉริยะ และยกระดับคุณภาพชีวิตประชาชน',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '500,000',
          budgetDetails: 'ปี 2570: 500,000'
        },
        { 
          name: 'จ้างเหมาที่ปรึกษาจัดทำนวัตกรรมองค์กร (Gov 4.0)', 
          objective: '🎯 พัฒนาบุคลากรให้สามารถออกแบบบริการ E-Service และกระบวนการดิจิทัล', 
          target: '🏁 บุคลากรสามารถออกแบบนวัตกรรมบริการได้ไม่น้อยกว่า 50% และมีต้นแบบ E-Service 1 ระบบ',
          expectedResult: '✨ ประชาชนมีความพึงพอใจในการใช้บริการภาครัฐผ่าน E-Service มากขึ้น',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '500,000',
          budgetDetails: 'ปี 2570: 500,000'
        },
        { 
          name: 'ระบบรับเรื่องร้องทุกข์ออนไลน์', 
          objective: '🎯 ยกระดับบริการแก้ไขปัญหาประชาชนให้รวดเร็วขึ้น', 
          target: '🏁 สามารถแก้ไขปัญหาได้เร็วขึ้นไม่น้อยกว่า 50%',
          expectedResult: '✨ ประชาชนได้รับการแก้ไขปัญหาที่รวดเร็ว (ภายใน 24 ชม.) และพึงพอใจ',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '160,500',
          budgetDetails: 'ปี 2570: 160,500'
        },
        { 
          name: 'ระบบบัตรพลเมืองออนไลน์ (Line OA)', 
          objective: '🎯 แยกกลุ่มประชากรตามทะเบียนราษฎร์และประชากรแฝงเพื่อการสื่อสาร', 
          target: '🏁 ประชาชนเข้าเป็นสมาชิก Line ไม่น้อยกว่า 60% ของประชากร',
          expectedResult: '✨ บริหารจัดการการสื่อสารได้ตรงกลุ่มเป้าหมาย และรวดเร็วขึ้น',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '53,500',
          budgetDetails: 'ปี 2570: 53,500'
        },
        { 
          name: 'ระบบติดตามโครงการ (Project Tracking)', 
          objective: '🎯 ให้ประชาชนเข้าถึงข้อมูลความคืบหน้าโครงการและมีส่วนร่วม', 
          target: '🏁 มีระบบติดตามสถานะโครงการที่ประชาชนเข้าถึงได้',
          expectedResult: '✨ ประชาชนทราบข้อมูลโครงการอย่างโปร่งใส และสามารถเสนอแนะได้',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '449,400',
          budgetDetails: 'ปี 2570: 449,400'
        },
        { 
          name: 'ระบบบัญชีครุภัณฑ์', 
          objective: '🎯 จัดเก็บข้อมูลครุภัณฑ์เพื่อการบริหารจัดการและวางแผนจัดซื้อ', 
          target: '🏁 มีข้อมูลครุภัณฑ์ในระบบ 100% สามารถสืบค้นได้',
          expectedResult: '✨ บริหารจัดการงบประมาณจัดซื้อครุภัณฑ์ได้อย่างมีประสิทธิภาพ',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '449,400',
          budgetDetails: 'ปี 2570: 449,400'
        },
        { 
          name: 'ระบบชำระภาษีและค่าธรรมเนียมออนไลน์', 
          objective: '🎯 เพิ่มความสะดวกในการชำระภาษีและค่าธรรมเนียม', 
          target: '🏁 ประชาชนเข้าใช้บริการไม่น้อยกว่า 30% ของผู้ใช้บริการทั้งหมด',
          expectedResult: '✨ จัดเก็บรายได้รวดเร็วและมีประสิทธิภาพมากขึ้น',
          responsibleAgency: '🏢 กองคลัง',
          budget: '423,720',
          budgetDetails: 'ปี 2570: 423,720'
        },
        { 
          name: 'ระบบติดต่อขอใช้บริการ E-Service', 
          objective: '🎯 ช่องทางติดต่อราชการแบบ One Stop Service', 
          target: '🏁 ประชาชนติดต่อหน่วยงานได้สะดวก รวดเร็วขึ้น',
          expectedResult: '✨ ยกระดับเทศบาลสู่องค์กรสมรรถนะสูง (HPA)',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '282,480',
          budgetDetails: 'ปี 2570: 282,480'
        },
        { 
          name: 'ระบบสำรวจความคิดเห็น (Survey)', 
          objective: '🎯 เก็บข้อมูลปัญหาและความต้องการเพื่อจัดทำแผนพัฒนาท้องถิ่น', 
          target: '🏁 ได้ข้อมูลความต้องการประชาชนเพื่อทำแผนฯ',
          expectedResult: '✨ มีแผนพัฒนาที่ตรงกับความต้องการของประชาชน',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '321,000',
          budgetDetails: 'ปี 2570: 321,000'
        },
        { 
          name: 'ระบบลงทะเบียนกิจกรรม', 
          objective: '🎯 ประชาสัมพันธ์และเก็บข้อมูลผู้เข้าร่วมกิจกรรม/อบรม', 
          target: '🏁 สมาชิก Line OA เพิ่มขึ้นไม่น้อยกว่า 20%',
          expectedResult: '✨ มีฐานข้อมูลการเข้าร่วมกิจกรรมเพื่อวางแผนงานในอนาคต',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '282,480',
          budgetDetails: 'ปี 2570: 282,480'
        },
        { 
          name: 'ระบบแฟ้มดิจิทัลและการสื่อสารภายใน', 
          objective: '🎯 ลดขั้นตอนและระยะเวลาการสื่อสารภายในองค์กร (Paperless)', 
          target: '🏁 ส่งเอกสารภายในได้เร็วขึ้นไม่น้อยกว่า 30%',
          expectedResult: '✨ เพิ่มประสิทธิภาพการดำเนินงาน ลดการใช้กระดาษ',
          responsibleAgency: '🏢 สำนักปลัดเทศบาล',
          budget: '321,000',
          budgetDetails: 'ปี 2570: 321,000'
        },
        { 
          name: 'ระบบเข้าออกงานและสลิปเงินเดือน', 
          objective: '🎯 บริหารจัดการข้อมูล HR การลงเวลาและการลาผ่าน Line OA ภายใน', 
          target: '🏁 ลดขั้นตอนงานการเจ้าหน้าที่ได้ไม่น้อยกว่า 30%',
          expectedResult: '✨ มีฐานข้อมูล HR ที่แม่นยำ รวดเร็ว ตรวจสอบได้',
          responsibleAgency: '🏢 กองการเจ้าหน้าที่',
          budget: '250,380',
          budgetDetails: 'ปี 2570: 250,380'
        },
        { 
            name: 'โครงการต่อเนื่องอื่นๆ ในยุทธศาสตร์', 
            objective: '🎯 โครงการระยะยาวตามแผนพัฒนาท้องถิ่น', 
            target: '-',
            expectedResult: '✨ การพัฒนาต่อเนื่องตามแผนฯ',
            responsibleAgency: '🏢 เทศบาลเมืองอุทัยธานี',
            budget: '-',
            budgetDetails: 'ปี 2569-2570 (งบผูกพัน)'
        }
      ]
    },
    {
      id: 'people',
      title: 'Smart People',
      thaiTitle: 'พลเมืองอัจฉริยะ',
      budget: '1,300,000',
      icon: <Users size={40} />,
      color: 'bg-yellow-400',
      accent: 'text-yellow-600',
      lightColor: 'bg-yellow-50',
      shadow: 'shadow-yellow-600',
      text: 'text-yellow-900',
      description: 'พัฒนาทักษะดิจิทัลและการมีส่วนร่วม',
      details: [
        { 
          name: 'จ้างเหมาที่ปรึกษาพัฒนาพลเมืองอัจฉริยะ', 
          objective: '🎯 สร้างอาสาสมัครท้องถิ่นดิจิทัล เพื่อเป็นตัวกลางสื่อสารกับชุมชน', 
          target: '🏁 สร้างอาสาสมัครไม่น้อยกว่า 5% ของประชากร',
          expectedResult: '✨ ประชาชนมีทักษะดิจิทัล และรู้เท่าทันภัยไซเบอร์',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '500,000',
          budgetDetails: 'ปี 2570: 500,000'
        },
        { 
          name: 'ระบบอาสาสมัครชุมชนดิจิทัล', 
          objective: '🎯 เครื่องมือสำหรับอาสาสมัครในการปฏิบัติงานและรายงาน', 
          target: '🏁 ประชาชนเป็นสมาชิก Line OA ไม่น้อยกว่า 50%',
          expectedResult: '✨ เกิดการสื่อสารสองทางระหว่างเทศบาลกับประชาชนอย่างมีประสิทธิภาพ',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '250,000',
          budgetDetails: 'ปี 2570: 250,000'
        },
        { 
          name: 'โครงการขยายฐานสมาชิก Line OA', 
          objective: '🎯 เพิ่มการเข้าถึงบริการดิจิทัลของประชาชนผ่าน Line Official', 
          target: '🏁 เพิ่มยอดผู้ใช้งาน Line OA อย่างต่อเนื่อง',
          expectedResult: '✨ ประชาชนเข้าถึงบริการภาครัฐได้ครอบคลุมทั่วถึง',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '550,000',
          budgetDetails: 'ปี 2569: 300,000, ปี 2570: 250,000'
        }
      ]
    },
    {
      id: 'environment',
      title: 'Smart Environment',
      thaiTitle: 'สิ่งแวดล้อมอัจฉริยะ',
      budget: '1,372,500',
      icon: <Leaf size={40} />,
      color: 'bg-green-400',
      accent: 'text-green-600',
      lightColor: 'bg-green-50',
      shadow: 'shadow-green-600',
      text: 'text-green-900',
      description: 'การจัดการขยะและทรัพยากรที่ยั่งยืน',
      details: [
        { 
          name: 'จ้างเหมาที่ปรึกษาพัฒนาสิ่งแวดล้อมอัจฉริยะ', 
          objective: '🎯 สร้างอาสาสมัครท้องถิ่นรักษ์โลก และวางแผนจัดการขยะ', 
          target: '🏁 มีแผนพัฒนาฯ และอาสาสมัครรักษ์โลกไม่น้อยกว่า 5% ของประชากร',
          expectedResult: '✨ ลดงบประมาณบริหารจัดการขยะ และมีการจัดการขยะที่ยั่งยืน',
          responsibleAgency: '🏢 กองสาธารณสุขและสิ่งแวดล้อม',
          budget: '500,000',
          budgetDetails: 'ปี 2570: 500,000'
        },
        { 
          name: 'ระบบบริหารจัดการขยะ/ธนาคารขยะออนไลน์', 
          objective: '🎯 ส่งเสริมการคัดแยกขยะตั้งแต่ต้นทางด้วยระบบธนาคารขยะ', 
          target: '🏁 ลดปริมาณขยะที่เทศบาลต้องจัดเก็บ',
          expectedResult: '✨ ลดค่าใช้จ่ายในการกำจัดขยะ และสร้างรายได้ให้ชุมชน',
          responsibleAgency: '🏢 กองสาธารณสุขและสิ่งแวดล้อม',
          budget: '498,000',
          budgetDetails: 'ปี 2570: 498,000'
        },
        { 
          name: 'ระบบบริหารรถเก็บขยะ (Realtime Tracking)', 
          objective: '🎯 ติดตามเส้นทางรถขยะและบริหารจัดการเส้นทาง', 
          target: '🏁 มีระบบบริหารจัดการรถขยะ 3 ระบบ',
          expectedResult: '✨ เพิ่มประสิทธิภาพการจัดเก็บขยะ ลดข้อร้องเรียน',
          responsibleAgency: '🏢 กองสาธารณสุขและสิ่งแวดล้อม',
          budget: '374,500',
          budgetDetails: 'ปี 2570: 374,500'
        }
      ]
    },
    {
      id: 'living',
      title: 'Smart Living',
      thaiTitle: 'การดำรงชีวิตอัจฉริยะ',
      budget: '2,968,904',
      icon: <HeartPulse size={40} />,
      color: 'bg-pink-400',
      accent: 'text-pink-600',
      lightColor: 'bg-pink-50',
      shadow: 'shadow-pink-600',
      text: 'text-pink-900',
      description: 'ความปลอดภัยและคุณภาพชีวิตที่ดี',
      details: [
        { 
          name: 'ระบบสัตวแพทย์ออนไลน์', 
          objective: '🎯 จองคิววัคซีน/ทำหมัน และจัดเก็บข้อมูลสัตว์เลี้ยงในเมือง', 
          target: '🏁 มีระบบจองคิวและฐานข้อมูลสัตว์เลี้ยง',
          expectedResult: '✨ วางแผนจัดสรรวัคซีนได้เหมาะสม และควบคุมโรคพิษสุนัขบ้าได้ดีขึ้น',
          responsibleAgency: '🏢 กองสาธารณสุขและสิ่งแวดล้อม',
          budget: '330,000',
          budgetDetails: 'ปี 2570: 330,000'
        },
        { 
          name: 'ระบบดูแลกลุ่มเปราะบางออนไลน์', 
          objective: '🎯 ดูแลและช่วยเหลือกลุ่มเปราะบาง/ผู้ป่วยติดเตียง ผ่าน Line OA', 
          target: '🏁 กลุ่มเปราะบางได้รับการดูแลและยืมอุปกรณ์การแพทย์ได้สะดวก',
          expectedResult: '✨ คุณภาพชีวิตกลุ่มเปราะบางดีขึ้น มีฐานข้อมูลที่เป็นปัจจุบัน',
          responsibleAgency: '🏢 กองสวัสดิการสังคม',
          budget: '370,000',
          budgetDetails: 'ปี 2570: 370,000'
        },
        { 
          name: 'ระบบ CCTV Online & ลงทะเบียนกล้องหน้าบ้าน', 
          objective: '🎯 ให้ประชาชนดูภาพจราจร/ระดับน้ำ และขอภาพย้อนหลังได้', 
          target: '🏁 มีระบบดูภาพออนไลน์และลงทะเบียนกล้องภาคประชาชน',
          expectedResult: '✨ เพิ่มความปลอดภัยในเมือง (Safety City) และการเฝ้าระวังภัย',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '420,000',
          budgetDetails: 'ปี 2570: 420,000'
        },
        { 
          name: 'My Re-fill City & Smart City Free WiFi', 
          objective: '🎯 บริการน้ำดื่มสะอาดฟรีลดขยะพลาสติก และบริการอินเทอร์เน็ตสาธารณะ', 
          target: '🏁 มีจุดบริการเติมน้ำและ WiFi ครอบคลุมพื้นที่เป้าหมาย',
          expectedResult: '✨ ลดขยะพลาสติก ประชาชนเข้าถึงบริการดิจิทัลได้ทั่วถึง',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '1,350,904',
          budgetDetails: 'ปี 2570: 1,350,904'
        },
        { 
          name: 'ระบบศูนย์บริการทางการแพทย์ออนไลน์', 
          objective: '🎯 บริหารจัดการคิวและบริการสาธารณสุข ลดความแออัด', 
          target: '🏁 ประชาชนได้รับบริการทางการแพทย์ที่สะดวก รวดเร็ว',
          expectedResult: '✨ ลดความแออัดในสถานพยาบาล ประชาชนเข้าถึงบริการง่ายขึ้น',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '498,000',
          budgetDetails: 'ปี 2570: 498,000'
        }
      ]
    },
    {
      id: 'economy',
      title: 'Smart Economy',
      thaiTitle: 'เศรษฐกิจอัจฉริยะ',
      budget: '700,000',
      icon: <TrendingUp size={40} />,
      color: 'bg-purple-400',
      accent: 'text-purple-600',
      lightColor: 'bg-purple-50',
      shadow: 'shadow-purple-600',
      text: 'text-purple-900',
      description: 'กระตุ้นรายได้และการท่องเที่ยว',
      details: [
        { 
          name: 'ระบบส่งเสริมการท่องเที่ยวออนไลน์', 
          objective: '🎯 ประชาสัมพันธ์สถานที่ท่องเที่ยว ดึงดูดนักท่องเที่ยวเข้าพื้นที่', 
          target: '🏁 มีระบบประชาสัมพันธ์และเชื่อมต่อกับ City Data Platform',
          expectedResult: '✨ นักท่องเที่ยวเพิ่มขึ้น เศรษฐกิจชุมชนดีขึ้น',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '350,000',
          budgetDetails: 'ปี 2570: 350,000'
        },
        { 
          name: 'ระบบส่งเสริมผู้ประกอบการ (Smart Business)', 
          objective: '🎯 ขึ้นทะเบียนและประชาสัมพันธ์ร้านค้า/ผู้ประกอบการในพื้นที่', 
          target: '🏁 ผู้ประกอบการเข้าสู่ระบบฐานข้อมูลและเป็นที่รู้จัก',
          expectedResult: '✨ ผู้ประกอบการมีรายได้เพิ่มขึ้นจากการประชาสัมพันธ์',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '350,000',
          budgetDetails: 'ปี 2570: 350,000'
        }
      ]
    }
  ];

  const dataPlatformData: Strategy = {
      id: 'platform',
      title: 'City Data Platform',
      thaiTitle: 'แพลตฟอร์มข้อมูลเมือง',
      budget: '800,000',
      icon: <Database size={40} />,
      color: 'bg-cyan-500',
      accent: 'text-cyan-600',
      lightColor: 'bg-cyan-50',
      shadow: 'shadow-cyan-600',
      text: 'text-cyan-900',
      description: 'ศูนย์กลางข้อมูลและรากฐานสำคัญ',
      details: [
        { 
          name: 'ระบบศูนย์รวมข้อมูลเมือง (Data Center)', 
          objective: '🎯 จัดทำ Data Catalog และรวบรวมข้อมูลเมือง', 
          target: '🏁 มีชุดข้อมูลเมืองที่เปิดเผยได้ (Open Data) 1 ระบบ',
          expectedResult: '✨ มีฐานข้อมูลเพื่อการตัดสินใจและบริหารเมืองอย่างมีประสิทธิภาพ',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '450,000',
          budgetDetails: 'ปี 2570: 450,000'
        },
        { 
          name: 'Data Exchange & Governance', 
          objective: '🎯 ระบบแลกเปลี่ยนข้อมูลและธรรมาภิบาลข้อมูล', 
          target: '🏁 เกิดการเชื่อมโยงข้อมูลระหว่างหน่วยงาน',
          expectedResult: '✨ ข้อมูลมีความมั่นคงปลอดภัยและบูรณาการร่วมกันได้',
          responsibleAgency: '🏢 กองยุทธศาสตร์และงบประมาณ',
          budget: '350,000',
          budgetDetails: 'ปี 2570: 350,000'
        }
      ]
  };

  const totalBudget = "11,135,264";

  return (
    <div className="min-h-screen bg-sky-50 font-sans selection:bg-indigo-200 p-4 md:p-8 flex flex-col items-center justify-center overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-40 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>

      {/* Header */}
      <header className="text-center mb-6 z-10 relative">
        <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-2 border border-blue-100">
          <span className="text-blue-600 font-bold text-sm tracking-wider">THAI NATIONAL PLAN 13 : MOOT MAI 8</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 drop-shadow-sm mb-1">
          งบประมาณ<span className="text-blue-600">เมืองน่าอยู่อัจฉริยะ</span> (Smart City)
        </h1>
        <p className="text-slate-500 text-sm md:text-base animate-bounce">
          👇 คลิกที่การ์ดเพื่อดูรายละเอียดโครงการ 👇
        </p>
      </header>

      {/* Main Layout */}
      <div className="relative w-full max-w-6xl flex-1 flex flex-col md:flex-row items-center justify-center gap-8 z-10 pb-24 md:pb-0">
        
        {/* Core: Platform */}
        <div className="order-1 md:order-2 md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-20 mt-4 md:mt-0">
          <div 
            className="group relative cursor-pointer"
            onClick={() => setSelectedStrategy(dataPlatformData)}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-56 h-56 md:w-72 md:h-72 bg-white rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white transform transition-all hover:scale-105 duration-300">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-50 p-3 rounded-full mb-1 shadow-inner">
                <Database size={40} className="text-blue-600" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-slate-800 text-center leading-tight">
                City Data<br/><span className="text-blue-600">Platform</span>
              </h2>
              <div className="mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                <Coins size={14} />
                <span className="font-bold">{dataPlatformData.budget}</span>
              </div>
              <span className="text-[10px] text-slate-400 mt-1">กดเพื่อดูรายละเอียด</span>
            </div>
          </div>
        </div>

        {/* Strategies Cards */}
        <div className="order-2 md:order-1 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-44 md:gap-y-16">
          {strategies.map((strategy, index) => {
             // Positioning Logic
             let positionClass = "";
             if (index === 0) positionClass = "lg:col-start-1 lg:row-start-1"; // Top Left
             if (index === 1) positionClass = "lg:col-start-3 lg:row-start-1"; // Top Right
             if (index === 2) positionClass = "lg:col-start-1 lg:row-start-2 lg:translate-y-12"; // Bottom Left
             if (index === 3) positionClass = "lg:col-start-3 lg:row-start-2 lg:translate-y-12"; // Bottom Right
             if (index === 4) positionClass = "lg:col-start-2 lg:row-start-3 lg:-translate-y-12"; // Bottom Center

            return (
              <div 
                key={strategy.id}
                className={`transform transition-all duration-300 hover:-translate-y-2 ${positionClass} flex justify-center`}
                onMouseEnter={() => setActiveCard(strategy.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setSelectedStrategy(strategy)}
              >
                <div className={`
                  w-full max-w-sm rounded-3xl p-5 relative overflow-hidden group
                  ${strategy.color} 
                  shadow-[0_8px_0_rgb(0,0,0,0.15)] hover:shadow-[0_12px_0_rgb(0,0,0,0.2)] active:shadow-[0_4px_0_rgb(0,0,0,0.2)] active:translate-y-1
                  border-4 border-white/30
                  flex flex-col items-center text-center
                  cursor-pointer transition-all
                `}>
                  {/* Glass Effect */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
                  
                  {/* Click Hint */}
                  <div className="absolute top-2 right-2 bg-white/20 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Search size={16} className="text-white" />
                  </div>

                  <div className="flex items-center gap-3 mb-2 z-10 w-full justify-center">
                    <div className="bg-white/90 p-2.5 rounded-2xl shadow-sm text-slate-700 group-hover:scale-110 transition-transform">
                        {strategy.icon}
                    </div>
                    <div className="text-left">
                        <h3 className={`text-xl font-black ${strategy.text} leading-none`}>{strategy.title}</h3>
                        <h4 className="text-white font-bold text-sm opacity-90">{strategy.thaiTitle}</h4>
                    </div>
                  </div>

                  <div className="bg-white text-slate-800 px-4 py-1.5 rounded-full shadow-md flex items-center gap-2 mb-3 z-10 font-mono border-2 border-slate-100">
                    <Wallet size={16} className="text-slate-500" />
                    <span className="font-bold text-lg tracking-tight">{strategy.budget}</span>
                    <span className="text-xs text-slate-500">บาท</span>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 w-full border border-white/30">
                     <p className={`text-xs font-semibold ${strategy.text} mb-1`}>{strategy.description}</p>
                     <div className="text-white/80 text-[10px] flex items-center justify-center gap-1">
                        <FileText size={10} />
                        <span>คลิกเพื่อดู {strategy.details.length} โครงการย่อย</span>
                     </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grand Total Footer */}
      <footer className="fixed bottom-4 md:bottom-8 z-10 max-w-2xl w-[90%] mx-auto">
        <div className="bg-slate-800/90 backdrop-blur-md text-white p-3 md:p-4 rounded-2xl shadow-2xl border border-slate-600 flex flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-3">
                <div className="bg-yellow-400 p-2 rounded-full text-slate-900">
                    <Coins size={24} />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-slate-200">งบประมาณรวมทั้งสิ้น</h3>
                    <p className="text-[10px] text-slate-400">Total Budget (2569-2570)</p>
                </div>
             </div>
             <div className="text-2xl font-black text-yellow-400 font-mono">
                {totalBudget} <span className="text-sm text-slate-400 font-sans">บาท</span>
             </div>
        </div>
      </footer>

      {/* --- MODAL --- */}
      {selectedStrategy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedStrategy(null)}
          ></div>

          {/* Modal Content */}
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative animate-scale-in border-8 border-white">
            
            {/* Header */}
            <div className={`${selectedStrategy.lightColor} p-6 border-b border-slate-100 flex items-start justify-between`}>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${selectedStrategy.color} text-white shadow-lg`}>
                  {selectedStrategy.icon}
                </div>
                <div>
                  <h2 className={`text-2xl font-black ${selectedStrategy.accent}`}>{selectedStrategy.thaiTitle}</h2>
                  <p className="text-slate-500 text-sm font-medium">{selectedStrategy.title} Strategy</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedStrategy(null)}
                className="p-2 bg-white hover:bg-slate-100 rounded-full text-slate-400 hover:text-red-500 transition-colors shadow-sm border border-slate-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* Budget Summary in Modal */}
            <div className="px-6 py-4 bg-white border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
              <span className="text-slate-500 text-sm font-bold">งบประมาณรวมด้านนี้</span>
              <div className={`text-xl font-bold ${selectedStrategy.accent} font-mono flex items-center gap-2`}>
                <Coins size={20} />
                {selectedStrategy.budget} บาท
              </div>
            </div>

            {/* Content List */}
            <div className="overflow-y-auto p-6 bg-slate-50/50 custom-scrollbar flex-1">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">รายการโครงการ (Projects Detail Breakdown)</h3>
              <div className="space-y-4">
                {selectedStrategy.details.map((project, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-blue-200 transition-all hover:shadow-md">
                    <div className="flex flex-col gap-3">
                      
                      {/* Project Name & Budget Header */}
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-100 pb-3 mb-1">
                          <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                            <ChevronRight size={20} className={`mt-0.5 ${selectedStrategy.accent}`} />
                            {project.name}
                          </h4>
                          <div className="flex flex-col items-end">
                             <span className={`text-lg font-black ${selectedStrategy.accent} font-mono bg-slate-50 px-3 py-1 rounded-lg`}>
                               {project.budget}
                             </span>
                             {project.budgetDetails && (
                               <span className="text-[10px] text-slate-400 mt-1 font-medium bg-white border border-slate-100 px-2 py-0.5 rounded-md">
                                 {project.budgetDetails}
                               </span>
                             )}
                          </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-2">
                          <div className="space-y-1">
                             <div className="flex items-start gap-2">
                                <Target size={16} className="text-red-400 mt-0.5 shrink-0" />
                                <div>
                                    <span className="font-bold text-slate-600 block text-xs uppercase tracking-wide">วัตถุประสงค์ (Objective)</span>
                                    <p className="text-slate-700 leading-relaxed">{project.objective}</p>
                                </div>
                             </div>
                          </div>

                          <div className="space-y-1">
                             <div className="flex items-start gap-2">
                                <Award size={16} className="text-orange-400 mt-0.5 shrink-0" />
                                <div>
                                    <span className="font-bold text-slate-600 block text-xs uppercase tracking-wide">เป้าหมาย (Target)</span>
                                    <p className="text-slate-700 leading-relaxed">{project.target}</p>
                                </div>
                             </div>
                          </div>

                          <div className="space-y-1 md:col-span-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                             <div className="flex items-start gap-2">
                                <TrendingUp size={16} className="text-green-500 mt-0.5 shrink-0" />
                                <div>
                                    <span className="font-bold text-slate-600 block text-xs uppercase tracking-wide">ผลที่คาดว่าจะได้รับ (Expected Result)</span>
                                    <p className="text-slate-700 leading-relaxed">{project.expectedResult}</p>
                                </div>
                             </div>
                          </div>
                          
                          <div className="md:col-span-2 text-right">
                             <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 font-medium bg-white px-2 py-1 rounded border border-slate-200">
                                <Briefcase size={10} />
                                รับผิดชอบโดย: {project.responsibleAgency}
                             </span>
                          </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-slate-100 text-center text-xs text-slate-400">
              ยุทธศาสตร์จังหวัดที่ 4: เมืองอัจฉริยะที่น่าอยู่ ปลอดภัย เติบโตได้อย่างยั่งยืน
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scale-in {
          animation: scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default SmartCityBudgetModal;