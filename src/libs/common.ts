import { Category, Question, Subject } from "@/types/commonTypes";

export function getCategories(): Category[] {
  return [
    {
      id: 1,
      name: "all",
    },
    {
      id: 2,
      name: "cs",
    },
    { id: 3, name: "javascript" },
    {
      id: 4,
      name: "react",
    },
  ];
}

export function getQuestions(subject: Subject): {
  questions: Question[];
  initIndex: number;
  initUsedIndexes: number[];
} {
  const questions = {
    cs: [
      {
        id: "cs_1",
        question: "HTTP와 HTTPS의 차이점은 무엇인가요?",
        answer:
          "HTTP는 HyperText Transfer Protocol로 데이터를 암호화하지 않고 주고받으며, HTTPS는 Secure Sockets Layer(SSL)를 사용하여 데이터를 암호화해서 전송합니다. HTTPS는 보안성이 높아 중간자 공격을 방지할 수 있습니다.",
      },
      {
        id: "cs_2",
        question: "TCP와 UDP의 차이점은 무엇인가요?",
        answer:
          "TCP(Transmission Control Protocol)는 연결 지향적이고 신뢰성이 높은 프로토콜로 데이터 전달을 보장합니다. UDP(User Datagram Protocol)는 비연결형으로, 속도가 빠르지만 신뢰성이 낮아 데이터 손실 가능성이 있습니다. TCP는 데이터 정확성이 중요할 때, UDP는 속도가 중요할 때 사용됩니다.",
      },
      {
        id: "cs_3",
        question: "DNS가 어떻게 동작하나요?",
        answer:
          "DNS(Domain Name System)는 도메인 이름을 IP 주소로 변환하는 시스템입니다. 사용자가 브라우저에 도메인 이름을 입력하면, DNS 서버가 해당 도메인의 IP 주소를 반환하여 사용자가 원하는 서버에 연결할 수 있게 합니다.",
      },
      {
        id: "cs_4",
        question: "RESTful API란 무엇인가요?",
        answer:
          "RESTful API는 Representational State Transfer의 원칙을 따르는 웹 서비스입니다. 주로 HTTP 메서드(GET, POST, PUT, DELETE 등)를 사용하여 자원을 CRUD 방식으로 처리하며, 자원(Resource)을 URL로 표현합니다. RESTful API는 클라이언트와 서버 간의 데이터 교환을 단순화하고 확장성을 제공합니다.",
      },
      {
        id: "cs_5",
        question: "브라우저의 렌더링 과정에 대해 설명해주세요.",
        answer:
          "브라우저는 HTML을 파싱하여 DOM 트리를, CSS를 파싱하여 CSSOM 트리를 생성합니다. 이 두 트리가 결합되어 렌더 트리가 만들어지며, 이를 기반으로 레이아웃을 계산한 후, 화면에 픽셀 단위로 그리는 페인팅 과정이 이루어집니다. 자바스크립트는 DOM과 CSSOM의 변경을 유발하여 렌더링에 영향을 미칩니다.",
      },
      {
        id: "cs_6",
        question:
          "CORS(Cross-Origin Resource Sharing)란 무엇이며, 어떻게 해결할 수 있나요?",
        answer:
          "CORS는 브라우저가 다른 도메인으로부터 리소스를 요청할 때 발생하는 보안 정책입니다. 이를 해결하기 위해 서버에서 Access-Control-Allow-Origin 헤더를 설정하여 특정 도메인 또는 모든 도메인의 요청을 허용할 수 있습니다.",
      },
      {
        id: "cs_7",
        question: "캐시(Cache)란 무엇이며, 웹에서 어떻게 사용되나요?",
        answer:
          "캐시는 자주 사용하는 데이터를 미리 저장해 두었다가 빠르게 제공하는 메커니즘입니다. 웹에서는 브라우저가 자주 요청하는 리소스(이미지, CSS, JavaScript)를 캐싱하여, 서버로부터 매번 다운로드하지 않고 빠르게 로드할 수 있게 합니다.",
      },
      {
        id: "cs_8",
        question:
          "XSS(Cross-Site Scripting)와 CSRF(Cross-Site Request Forgery)의 차이점은 무엇인가요?",
        answer:
          "XSS는 공격자가 악성 스크립트를 웹 페이지에 삽입하여 사용자 데이터를 탈취하는 공격입니다. CSRF는 사용자가 인증된 상태에서 공격자가 위조된 요청을 보내 서버의 상태를 변경하게 만드는 공격입니다. XSS는 사용자 데이터 보호가, CSRF는 서버 데이터 보호가 중요합니다.",
      },
      {
        id: "cs_9",
        question: "메모리 관리와 가비지 컬렉션에 대해 설명해주세요.",
        answer:
          "메모리 관리는 프로세스가 사용하는 메모리를 관리하는 과정입니다. 가비지 컬렉션(Garbage Collection)은 더 이상 사용되지 않는 객체나 메모리를 자동으로 회수하는 기술로, JavaScript는 이를 자동으로 처리해줍니다. 하지만 명시적으로 메모리 해제를 해야 할 경우가 생기지 않도록 유의해야 합니다.",
      },
      {
        id: "cs_10",
        question: "Event Loop와 Call Stack에 대해 설명해주세요.",
        answer:
          "Call Stack은 함수 호출을 처리하는 LIFO(Last In, First Out) 구조입니다. Event Loop는 Call Stack이 비어 있는 동안 대기 중인 비동기 작업을 실행하는 역할을 합니다. 비동기 작업이 완료되면 Task Queue로 이동하고, Event Loop는 Call Stack이 비어 있으면 Task Queue에서 작업을 실행합니다.",
      },
    ],
    javascript: [
      {
        id: "js_1",
        question: "JavaScript에서 this 키워드가 어떻게 동작하나요?",
        answer:
          "**this**는 함수가 호출되는 맥락에 따라 달라집니다. 전역에서 this는 window 객체를 가리키며, 메서드 내부에서는 그 메서드를 소유한 객체를 가리킵니다. 또한 화살표 함수에서 this는 자신을 감싸고 있는 스코프의 this를 그대로 상속받습니다.",
      },
      {
        id: "js_2",
        question: "var, let, const의 차이점은 무엇인가요?",
        answer:
          "**var**는 함수 스코프를 가지며, 중복 선언이 가능합니다. **let**과 **const**는 블록 스코프를 가지며, 중복 선언이 불가능합니다. **let**은 값을 재할당할 수 있지만, **const**는 선언과 동시에 값을 할당해야 하고 이후 재할당이 불가능합니다.",
      },
      {
        id: "js_3",
        question: "JavaScript의 비동기 처리 방식에 대해 설명해주세요.",
        answer:
          "JavaScript는 단일 스레드에서 동작하지만, 비동기 처리를 통해 논블로킹 방식으로 작업을 처리합니다. 이를 위해 콜백 함수, 프로미스(Promise), **async/await**을 사용합니다. 비동기 작업이 완료되면 Event Loop가 Task Queue에서 이를 실행합니다.",
      },
      {
        id: "js_4",
        question: "클로저(Closure)란 무엇이며, 어떻게 동작하나요?",
        answer:
          "클로저는 함수가 자신이 선언된 외부 스코프에 접근할 수 있는 기능을 말합니다. 외부 함수가 종료된 후에도 내부 함수가 외부 함수의 변수를 기억하고 사용할 수 있습니다. 이는 데이터 은닉과 상태 유지를 가능하게 합니다.",
      },
      {
        id: "js_5",
        question: "프로토타입 상속(Prototype Inheritance)이란 무엇인가요?",
        answer:
          "프로토타입 상속은 객체가 다른 객체로부터 속성과 메서드를 상속받는 방식입니다. JavaScript의 모든 객체는 내부적으로 [[Prototype]] 링크를 가지고 있으며, 이를 통해 상속을 구현합니다. 객체가 속성이나 메서드를 찾을 때 해당 객체에 없으면 프로토타입 체인에서 상위 객체를 탐색합니다.",
      },
    ],
    react: [
      {
        id: "react_1",
        question: "React의 상태(state)와 props의 차이점은 무엇인가요?",
        answer:
          "**state**는 컴포넌트 내부에서 관리하는 동적인 데이터로, 상태가 변경되면 컴포넌트가 다시 렌더링됩니다. **props**는 부모 컴포넌트가 자식 컴포넌트에 전달하는 데이터로, 자식 컴포넌트에서 수정할 수 없습니다.",
      },
      {
        id: "react_2",
        question:
          "React에서 Hooks란 무엇이며, 자주 사용되는 Hook은 무엇인가요?",
        answer:
          "Hooks는 함수형 컴포넌트에서도 상태 관리와 라이프사이클 기능을 사용할 수 있게 해주는 기능입니다. 자주 사용되는 Hook으로는 useState(상태 관리), useEffect(사이드 이펙트 처리), useContext(컨텍스트 사용) 등이 있습니다.",
      },
      {
        id: "react_3",
        question: "React 컴포넌트의 라이프사이클에 대해 설명해주세요.",
        answer:
          "React 컴포넌트는 마운트(mount), 업데이트(update), **언마운트(unmount)**의 세 가지 주요 라이프사이클을 가집니다. 이 과정에서 componentDidMount, componentDidUpdate, **componentWillUnmount**와 같은 라이프사이클 메서드나 **useEffect**를 통해 특정 작업을 실행할 수 있습니다.",
      },
      {
        id: "react_4",
        question:
          "React에서 useEffect Hook은 언제 사용되며, 어떻게 동작하나요?",
        answer:
          "**useEffect**는 컴포넌트가 렌더링될 때마다 특정 작업을 수행하거나, 컴포넌트가 언마운트될 때 정리 작업을 수행할 때 사용됩니다. 첫 번째 인자로 콜백 함수를 받고, 두 번째 인자로 의존성 배열을 전달하여 특정 값이 변경될 때만 효과가 실행되도록 설정할 수 있습니다.",
      },
      {
        id: "react_5",
        question: "상태 관리 라이브러리인 Redux의 기본 개념은 무엇인가요?",
        answer:
          "Redux는 애플리케이션의 전역 상태를 관리하기 위한 라이브러리로, **store**에 상태를 저장하고 **action**을 통해 상태를 변경하며, **reducer**를 사용하여 상태 변화를 처리합니다. Redux는 상태의 예측 가능성과 디버깅 용이성을 제공합니다.",
      },
    ],
  };

  let refineQuestions = [];
  if (subject === "all") {
    refineQuestions = Object.values(questions).reduce(
      (acc, cur) => acc.concat(cur),
      []
    );
  } else {
    refineQuestions = questions[subject];
  }

  const { usedIndexes, index } = getRandomQuestion({
    usedIndexes: [],
    questions: refineQuestions,
  });
  return {
    questions: refineQuestions,
    initIndex: index,
    initUsedIndexes: usedIndexes,
  };
}

export const getRandomQuestion = ({
  usedIndexes,
  questions,
}: {
  usedIndexes: number[];
  questions: Question[];
}): { usedIndexes: number[]; index: number } => {
  // 모든 질문을 다 사용했으면 초기화
  if (usedIndexes.length === questions.length) {
    return {
      usedIndexes: [],
      index: 0,
    };
  }

  let randomIndex;
  do {
    // 중복되지 않은 인덱스 선택
    randomIndex = Math.floor(Math.random() * questions.length);
  } while (usedIndexes.includes(randomIndex));

  return {
    usedIndexes: [...usedIndexes, randomIndex],
    index: randomIndex,
  };
};
