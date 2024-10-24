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

export function getQuestions(subject: Subject): Question[] {
  const questions = {
    cs: [
      {
        id: "cs_1",
        question: "HTTP와 HTTPS의 차이점은 무엇인가요?",
        answers: [
          "HTTP는 HyperText Transfer Protocol로 데이터를 암호화하지 않고 주고받으며, HTTPS는 Secure Sockets Layer(SSL)를 사용하여 데이터를 암호화해서 전송합니다.",
          "HTTPS는 보안성이 높아 중간자 공격을 방지할 수 있습니다.",
        ],
      },
      {
        id: "cs_2",
        question: "TCP와 UDP의 차이점은 무엇인가요?",
        answers: [
          "TCP(Transmission Control Protocol)는 연결 지향적이고 신뢰성이 높은 프로토콜로 데이터 전달을 보장합니다.",
          "UDP(User Datagram Protocol)는 비연결형으로, 속도가 빠르지만 신뢰성이 낮아 데이터 손실 가능성이 있습니다.",
          "TCP는 데이터 정확성이 중요할 때, UDP는 속도가 중요할 때 사용됩니다.",
        ],
      },
      {
        id: "cs_3",
        question: "DNS가 어떻게 동작하나요?",
        answers: [
          "DNS(Domain Name System)는 도메인 이름을 IP 주소로 변환하는 시스템입니다.",
          "사용자가 브라우저에 도메인 이름을 입력하면, DNS 서버가 해당 도메인의 IP 주소를 반환하여 사용자가 원하는 서버에 연결할 수 있게 합니다.",
        ],
      },
      {
        id: "cs_4",
        question: "RESTful API란 무엇인가요?",
        answers: [
          "RESTful API는 Representational State Transfer의 원칙을 따르는 웹 서비스입니다.",
          "주로 HTTP 메서드(GET, POST, PUT, DELETE 등)를 사용하여 자원을 CRUD 방식으로 처리하며, 자원(Resource)을 URL로 표현합니다.",
          "RESTful API는 클라이언트와 서버 간의 데이터 교환을 단순화하고 확장성을 제공합니다.",
        ],
      },
      {
        id: "cs_5",
        question: "브라우저의 렌더링 과정에 대해 설명해주세요.",
        answers: [
          "브라우저는 HTML을 파싱하여 DOM 트리를, CSS를 파싱하여 CSSOM 트리를 생성합니다.",
          "이 두 트리가 결합되어 렌더 트리가 만들어지며, 이를 기반으로 레이아웃을 계산한 후, 화면에 픽셀 단위로 그리는 페인팅 과정이 이루어집니다.",
          "자바스크립트는 DOM과 CSSOM의 변경을 유발하여 렌더링에 영향을 미칩니다.",
        ],
      },
      {
        id: "cs_6",
        question:
          "CORS(Cross-Origin Resource Sharing)란 무엇이며, 어떻게 해결할 수 있나요?",
        answers: [
          "CORS는 브라우저가 다른 도메인으로부터 리소스를 요청할 때 발생하는 보안 정책입니다.",
          "이를 해결하기 위해 서버에서 Access-Control-Allow-Origin 헤더를 설정하여 특정 도메인 또는 모든 도메인의 요청을 허용할 수 있습니다.",
        ],
      },
      {
        id: "cs_7",
        question: "캐시(Cache)란 무엇이며, 웹에서 어떻게 사용되나요?",
        answers: [
          "캐시는 자주 사용하는 데이터를 미리 저장해 두었다가 빠르게 제공하는 메커니즘입니다.",
          "웹에서는 브라우저가 자주 요청하는 리소스(이미지, CSS, JavaScript)를 캐싱하여, 서버로부터 매번 다운로드하지 않고 빠르게 로드할 수 있게 합니다.",
        ],
      },
      {
        id: "cs_8",
        question:
          "XSS(Cross-Site Scripting)와 CSRF(Cross-Site Request Forgery)의 차이점은 무엇인가요?",
        answers: [
          "XSS는 공격자가 악성 스크립트를 웹 페이지에 삽입하여 사용자 데이터를 탈취하는 공격입니다.",
          "CSRF는 사용자가 인증된 상태에서 공격자가 위조된 요청을 보내 서버의 상태를 변경하게 만드는 공격입니다.",
          "XSS는 사용자 데이터 보호가, CSRF는 서버 데이터 보호가 중요합니다.",
        ],
      },
      {
        id: "cs_9",
        question: "메모리 관리와 가비지 컬렉션에 대해 설명해주세요.",
        answers: [
          "메모리 관리는 프로세스가 사용하는 메모리를 관리하는 과정입니다.",
          "가비지 컬렉션(Garbage Collection)은 더 이상 사용되지 않는 객체나 메모리를 자동으로 회수하는 기술로, JavaScript는 이를 자동으로 처리해줍니다.",
          "하지만 명시적으로 메모리 해제를 해야 할 경우가 생기지 않도록 유의해야 합니다.",
        ],
      },
      {
        id: "cs_10",
        question: "Event Loop와 Call Stack에 대해 설명해주세요.",
        answers: [
          "Call Stack은 함수 호출을 처리하는 LIFO(Last In, First Out) 구조입니다.",
          "Event Loop는 Call Stack이 비어 있는 동안 대기 중인 비동기 작업을 실행하는 역할을 합니다.",
          "비동기 작업이 완료되면 Task Queue로 이동하고, Event Loop는 Call Stack이 비어 있으면 Task Queue에서 작업을 실행합니다.",
        ],
      },
      {
        id: "cs_11",
        question: "HTTP 상태 코드 중 200, 404, 500은 각각 무엇을 의미하나요?",
        answers: [
          "HTTP 상태 코드 200은 요청이 성공적으로 처리되었음을 의미하며, 404는 요청한 리소스를 찾을 수 없음을, 500은 서버에서 오류가 발생했음을 의미합니다.",
        ],
      },
      {
        id: "cs_12",
        question: "OSI 7계층에 대해 설명해주세요.",
        answers: [
          "OSI 7계층은 네트워크 통신을 7단계로 나눈 모델로, 물리 계층부터 응용 계층까지 데이터 통신 과정을 정의합니다.",
          "물리 계층은 하드웨어적 연결을, 응용 계층은 최종 사용자와의 상호작용을 다룹니다.",
        ],
      },
      {
        id: "cs_13",
        question: "세션과 쿠키의 차이점은 무엇인가요?",
        answers: [
          "쿠키는 클라이언트에 저장되는 작은 데이터로, 서버와의 상태를 저장하는 데 사용됩니다.",
          "세션은 서버에 저장되며, 클라이언트와 서버 간의 상태를 유지하기 위해 사용됩니다.",
        ],
      },
      {
        id: "cs_14",
        question: "웹소켓(WebSocket)이란 무엇인가요?",
        answers: [
          "웹소켓은 클라이언트와 서버 간의 양방향 통신을 가능하게 하는 프로토콜로, 실시간 데이터 전송에 유용합니다.",
          "HTTP와 달리 연결이 유지되어 데이터를 주고받을 수 있습니다.",
        ],
      },
      {
        id: "cs_15",
        question: "API Gateway란 무엇인가요?",
        answers: [
          "API Gateway는 클라이언트 요청을 여러 내부 서비스로 라우팅하는 역할을 합니다.",
          "마이크로서비스 아키텍처에서 주로 사용되며, 인증, 로깅, 로드 밸런싱 등의 기능을 제공합니다.",
        ],
      },
      {
        id: "cs_16",
        question: "CDN(Content Delivery Network)이란 무엇인가요?",
        answers: [
          "CDN은 지리적으로 분산된 서버 네트워크로, 사용자와 가까운 서버에서 콘텐츠를 제공하여 로드 시간을 줄이고 성능을 개선합니다.",
        ],
      },
      {
        id: "cs_17",
        question: "OAuth란 무엇인가요?",
        answers: [
          "OAuth는 사용자 비밀번호를 노출하지 않고 제3의 애플리케이션이 사용자 데이터를 접근할 수 있도록 인증하는 프로토콜입니다.",
          "주로 소셜 로그인 등에 사용됩니다.",
        ],
      },
      {
        id: "cs_18",
        question: "로드 밸런서란 무엇인가요?",
        answers: [
          "로드 밸런서는 트래픽을 여러 서버에 분산시켜 서버의 과부하를 방지하고 가용성을 높이는 장치나 기술입니다.",
        ],
      },
      {
        id: "cs_19",
        question: "JWT(JSON Web Token)란 무엇인가요?",
        answers: [
          "JWT는 JSON 형식의 데이터를 사용한 인증 토큰으로, 클라이언트와 서버 간의 정보를 안전하게 전송하기 위한 표준입니다.",
          "주로 인증과 권한 부여에 사용됩니다.",
        ],
      },
      {
        id: "cs_20",
        question: "IPv4와 IPv6의 차이점은 무엇인가요?",
        answers: [
          "IPv4는 32비트 주소 체계를 사용하여 약 43억 개의 주소를 제공하며, IPv6는 128비트 주소 체계를 사용하여 사실상 무한대의 주소를 제공합니다.",
          "IPv6는 IPv4 주소 고갈 문제를 해결하기 위해 도입되었습니다.",
        ],
      },
    ],
    javascript: [
      {
        id: "js_1",
        question: "JavaScript에서 this 키워드가 어떻게 동작하나요?",
        answers: [
          "this는 함수가 호출되는 맥락에 따라 달라집니다.",
          "전역에서 this는 window 객체를 가리키며, 메서드 내부에서는 그 메서드를 소유한 객체를 가리킵니다.",
          "또한 화살표 함수에서 this는 자신을 감싸고 있는 스코프의 this를 그대로 상속받습니다.",
        ],
      },
      {
        id: "js_2",
        question: "var, let, const의 차이점은 무엇인가요?",
        answers: [
          "var는 함수 스코프를 가지며, 중복 선언이 가능합니다.",
          "let과 const는 블록 스코프를 가지며, 중복 선언이 불가능합니다.",
          "let은 값을 재할당할 수 있지만, const는 선언과 동시에 값을 할당해야 하고 이후 재할당이 불가능합니다.",
        ],
      },
      {
        id: "js_3",
        question: "JavaScript의 비동기 처리 방식에 대해 설명해주세요.",
        answers: [
          "JavaScript는 단일 스레드에서 동작하지만, 비동기 처리를 통해 논블로킹 방식으로 작업을 처리합니다.",
          "이를 위해 콜백 함수, 프로미스(Promise), async/await을 사용합니다.",
          "비동기 작업이 완료되면 Event Loop가 Task Queue에서 이를 실행합니다.",
        ],
      },
      {
        id: "js_4",
        question: "클로저(Closure)란 무엇이며, 어떻게 동작하나요?",
        answers: [
          "클로저는 함수가 자신이 선언된 외부 스코프에 접근할 수 있는 기능을 말합니다.",
          "외부 함수가 종료된 후에도 내부 함수가 외부 함수의 변수를 기억하고 사용할 수 있습니다.",
          "이는 데이터 은닉과 상태 유지를 가능하게 합니다.",
        ],
      },
      {
        id: "js_5",
        question: "프로토타입 상속(Prototype Inheritance)이란 무엇인가요?",
        answers: [
          "프로토타입 상속은 객체가 다른 객체로부터 속성과 메서드를 상속받는 방식입니다.",
          "JavaScript의 모든 객체는 내부적으로 [[Prototype]] 링크를 가지고 있으며, 이를 통해 상속을 구현합니다.",
          "객체가 속성이나 메서드를 찾을 때 해당 객체에 없으면 프로토타입 체인에서 상위 객체를 탐색합니다.",
        ],
      },
      {
        id: "js_6",
        question: "호이스팅(Hoisting)이란 무엇인가요?",
        answers: [
          "호이스팅은 변수와 함수 선언이 코드의 상단으로 끌어올려지는 JavaScript의 동작 방식입니다.",
          "변수는 선언만 호이스팅되며, 할당은 호이스팅되지 않습니다.",
          "함수 선언은 전체가 호이스팅됩니다.",
        ],
      },
      {
        id: "js_7",
        question:
          "이벤트 버블링(Event Bubbling)과 캡처링(Event Capturing)이란 무엇인가요?",
        answers: [
          "이벤트 버블링은 자식 요소에서 발생한 이벤트가 부모 요소로 전파되는 현상이고,",
          "이벤트 캡처링은 부모 요소에서 자식 요소로 이벤트가 전파되는 방식입니다.",
          "이벤트 리스너에 `useCapture` 옵션을 설정하여 캡처링 단계를 제어할 수 있습니다.",
        ],
      },
      {
        id: "js_8",
        question:
          "Arrow Function(화살표 함수)과 일반 함수의 차이점은 무엇인가요?",
        answers: [
          "화살표 함수는 자신만의 this를 가지지 않고, 자신이 선언된 위치의 this를 상속받습니다.",
          "반면 일반 함수는 호출될 때마다 자신만의 this를 생성합니다.",
        ],
      },
      {
        id: "js_9",
        question: "JavaScript에서 truthy와 falsy 값은 무엇인가요?",
        answers: [
          "truthy 값은 조건식에서 true로 평가되는 값이며,",
          "falsy 값은 false로 평가되는 값입니다.",
          "대표적인 falsy 값으로는 0, 빈 문자열, null, undefined, NaN 등이 있습니다.",
        ],
      },
      {
        id: "js_10",
        question: "spread 연산자와 rest 연산자의 차이점은 무엇인가요?",
        answers: [
          "spread 연산자는 배열이나 객체의 값을 개별 요소로 분리하여 사용하고,",
          "rest 연산자는 함수의 인자나 배열의 나머지 요소들을 하나로 모아 배열로 반환합니다.",
        ],
      },
      {
        id: "js_11",
        question:
          "동기(synchronous)와 비동기(asynchronous) 프로그래밍의 차이점은 무엇인가요?",
        answers: [
          "동기 프로그래밍은 작업이 순차적으로 실행되는 방식이고,",
          "비동기 프로그래밍은 작업이 완료되기를 기다리지 않고 다른 작업을 처리하는 방식입니다.",
          "비동기는 주로 시간이 오래 걸리는 작업에 사용됩니다.",
        ],
      },
      {
        id: "js_12",
        question: "콜백 함수(callback function)란 무엇인가요?",
        answers: [
          "콜백 함수는 다른 함수에 인자로 전달되어 특정 작업이 완료된 후 호출되는 함수입니다.",
          "비동기 작업을 처리할 때 많이 사용됩니다.",
        ],
      },
      {
        id: "js_13",
        question:
          "JavaScript에서 이벤트 위임(event delegation)이란 무엇인가요?",
        answers: [
          "이벤트 위임은 상위 요소에 이벤트 리스너를 설정하여 하위 요소의 이벤트를 처리하는 기법입니다.",
          "DOM 요소가 동적으로 추가될 때에도 이벤트를 처리할 수 있다는 장점이 있습니다.",
        ],
      },
      {
        id: "js_14",
        question: "null과 undefined의 차이점은 무엇인가요?",
        answers: [
          "null은 명시적으로 값이 비어 있음을 나타내는 값이며,",
          "undefined는 변수가 선언되었으나 값이 할당되지 않았을 때 나타나는 값입니다.",
        ],
      },
      {
        id: "js_15",
        question: "JavaScript의 모듈 시스템에 대해 설명해주세요.",
        answers: [
          "JavaScript의 모듈 시스템은 코드를 모듈화하여 재사용성을 높이고, 의존성을 관리하는 방식입니다.",
          "ES6부터 `import`와 `export` 키워드를 사용하여 모듈을 정의하고 가져올 수 있습니다.",
        ],
      },
      {
        id: "js_16",
        question: "이벤트 루프(Event Loop)란 무엇인가요?",
        answers: [
          "이벤트 루프는 JavaScript의 비동기 작업을 처리하는 메커니즘으로,",
          "콜백 함수나 프로미스가 실행되기를 대기하는 작업을 관리하고",
          "Call Stack이 비어 있을 때 작업을 실행합니다.",
        ],
      },
      {
        id: "js_17",
        question: "Promise와 async/await의 차이점은 무엇인가요?",
        answers: [
          "Promise는 비동기 작업의 상태와 결과를 처리하는 객체이며,",
          "async/await은 Promise를 더 직관적으로 사용할 수 있게 도와주는 문법입니다.",
          "async/await은 비동기 작업을 동기식 코드처럼 작성할 수 있게 해줍니다.",
        ],
      },
      {
        id: "js_18",
        question:
          "이뮤터블(immutable) 객체와 뮤터블(mutable) 객체의 차이점은 무엇인가요?",
        answers: [
          "이뮤터블 객체는 변경 불가능한 객체로, 한 번 생성되면 상태가 변하지 않습니다.",
          "반면 뮤터블 객체는 상태를 변경할 수 있습니다.",
          "이뮤터블 객체는 상태 관리를 더 쉽게 만들어 줍니다.",
        ],
      },
      {
        id: "js_19",
        question: "객체(Object)와 배열(Array)의 차이점은 무엇인가요?",
        answers: [
          "객체는 키-값 쌍으로 데이터를 저장하며,",
          "배열은 순서가 있는 리스트 형태로 데이터를 저장합니다.",
          "배열은 주로 리스트 데이터에, 객체는 서로 관련된 데이터를 그룹화할 때 사용됩니다.",
        ],
      },
      {
        id: "js_20",
        question: "Strict mode란 무엇인가요?",
        answers: [
          "Strict mode는 JavaScript의 오류를 보다 엄격하게 처리하여 코드의 안정성을 높이는 모드입니다.",
          "'use strict' 지시문을 코드 상단에 추가하여 활성화할 수 있습니다.",
        ],
      },
    ],
    react: [
      {
        id: "react_1",
        question: "React의 상태(state)와 props의 차이점은 무엇인가요?",
        answers: [
          "state는 컴포넌트 내부에서 관리하는 동적인 데이터로, 상태가 변경되면 컴포넌트가 다시 렌더링됩니다.",
          "props는 부모 컴포넌트가 자식 컴포넌트에 전달하는 데이터로, 자식 컴포넌트에서 수정할 수 없습니다.",
        ],
      },
      {
        id: "react_2",
        question:
          "React에서 Hooks란 무엇이며, 자주 사용되는 Hook은 무엇인가요?",
        answers: [
          "Hooks는 함수형 컴포넌트에서도 상태 관리와 라이프사이클 기능을 사용할 수 있게 해주는 기능입니다.",
          "자주 사용되는 Hook으로는 useState(상태 관리), useEffect(사이드 이펙트 처리), useContext(컨텍스트 사용) 등이 있습니다.",
        ],
      },
      {
        id: "react_3",
        question: "React 컴포넌트의 라이프사이클에 대해 설명해주세요.",
        answers: [
          "React 컴포넌트는 마운트(mount), 업데이트(update), 언마운트(unmount)의 세 가지 주요 라이프사이클을 가집니다.",
          "이 과정에서 componentDidMount, componentDidUpdate, componentWillUnmount와 같은 라이프사이클 메서드나 useEffect를 통해 특정 작업을 실행할 수 있습니다.",
        ],
      },
      {
        id: "react_4",
        question: "useEffect Hook은 어떤 역할을 하나요?",
        answers: [
          "useEffect는 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있게 해주는 Hook입니다.",
          "주로 데이터 패칭, DOM 조작, 구독 설정 및 해제를 위해 사용되며, 두 번째 인자인 의존성 배열을 통해 특정 값이 변경될 때만 실행되도록 제어할 수 있습니다.",
        ],
      },
      {
        id: "react_5",
        question: "React에서 가상 DOM(Virtual DOM)이란 무엇인가요?",
        answers: [
          "가상 DOM은 React가 실제 DOM과 상호작용하기 전에 메모리 내에서 DOM 구조를 추상화한 객체입니다.",
          "변경 사항을 가상 DOM에서 먼저 계산한 후, 실제 DOM에 최소한의 업데이트를 적용하여 성능을 최적화합니다.",
        ],
      },
      {
        id: "react_6",
        question:
          "React에서의 조건부 렌더링(Conditional Rendering)은 어떻게 하나요?",
        answers: [
          "조건부 렌더링은 특정 조건에 따라 다른 컴포넌트를 렌더링하는 방식입니다.",
          "JavaScript의 논리 연산자나 삼항 연산자를 사용하여 구현할 수 있습니다.",
        ],
      },
      {
        id: "react_7",
        question: "React의 Fragment란 무엇인가요?",
        answers: [
          "Fragment는 여러 자식 컴포넌트를 그룹화할 때 불필요한 DOM 노드를 추가하지 않기 위해 사용하는 컴포넌트입니다.",
          "빈 태그(`<></>`)나 React.Fragment를 사용하여 구현할 수 있습니다.",
        ],
      },
      {
        id: "react_8",
        question: "React에서 key props는 왜 필요한가요?",
        answers: [
          "key는 React가 어떤 항목이 변경, 추가, 또는 제거되었는지 식별하는 데 사용되는 고유한 값입니다.",
          "이를 통해 리스트 렌더링 시 성능을 최적화하고, 중복되는 DOM 업데이트를 방지할 수 있습니다.",
        ],
      },
      {
        id: "react_9",
        question: "컴포넌트 간 상태를 어떻게 공유하나요?",
        answers: [
          "컴포넌트 간 상태는 상위 컴포넌트에서 상태를 관리하고 props를 통해 하위 컴포넌트로 전달하는 방식으로 공유할 수 있습니다.",
          "또는 Context API를 사용하여 더 깊은 트리 구조에서도 상태를 전달할 수 있습니다.",
        ],
      },
      {
        id: "react_10",
        question: "useContext Hook은 언제 사용하나요?",
        answers: [
          "useContext는 Context API를 사용하여 컴포넌트 트리의 깊은 곳에서도 props를 직접 전달하지 않고 상태를 공유할 수 있게 해주는 Hook입니다.",
        ],
      },
      {
        id: "react_11",
        question:
          "React에서 상태 관리 도구로 Redux를 사용하는 이유는 무엇인가요?",
        answers: [
          "Redux는 전역 상태 관리를 위한 도구로, 애플리케이션의 상태를 하나의 중앙 저장소(Store)에서 관리합니다.",
          "상태 변경을 명시적으로 관리하여 예측 가능하고 일관성 있는 상태 관리를 할 수 있습니다.",
        ],
      },
      {
        id: "react_12",
        question:
          "Redux에서 액션(action)과 리듀서(reducer)는 어떤 역할을 하나요?",
        answers: [
          "액션은 상태를 변경하는 요청을 의미하며, 리듀서는 액션을 처리하여 새로운 상태를 반환하는 함수입니다.",
          "액션은 주로 객체 형태로, 리듀서는 순수 함수로 작성됩니다.",
        ],
      },
      {
        id: "react_13",
        question: "useReducer Hook은 언제 사용하나요?",
        answers: [
          "useReducer는 useState보다 복잡한 상태 관리 로직이 필요할 때 사용하는 Hook입니다.",
          "리듀서 함수를 통해 상태와 액션을 처리하여 상태를 관리합니다.",
        ],
      },
      {
        id: "react_14",
        question: "컴포넌트에서 메모이제이션(Memoization)이란 무엇인가요?",
        answers: [
          "메모이제이션은 컴포넌트가 동일한 입력값으로 반복해서 렌더링되지 않도록 값이나 함수의 결과를 캐싱하는 최적화 기법입니다.",
          "React에서는 useMemo와 useCallback Hook을 사용하여 메모이제이션을 구현할 수 있습니다.",
        ],
      },
      {
        id: "react_15",
        question:
          "React에서 서버 사이드 렌더링(SSR)은 무엇이며, 왜 사용하나요?",
        answers: [
          "서버 사이드 렌더링은 초기 페이지를 서버에서 렌더링하여 클라이언트에 전달하는 방식입니다.",
          "이를 통해 초기 로딩 시간을 줄이고, SEO를 개선할 수 있습니다.",
          "주로 Next.js와 같은 프레임워크에서 사용됩니다.",
        ],
      },
      {
        id: "react_16",
        question: "React의 컴포넌트 최적화 기법은 무엇이 있나요?",
        answers: [
          "React 컴포넌트 최적화 기법으로는 React.memo, useMemo, useCallback을 사용한 메모이제이션,",
          "가상 DOM을 활용한 효율적인 업데이트, Lazy loading을 통한 코드 스플리팅 등이 있습니다.",
        ],
      },
      {
        id: "react_17",
        question: "React에서 PropTypes는 어떤 역할을 하나요?",
        answers: [
          "PropTypes는 컴포넌트가 받는 props의 타입을 검사하여 잘못된 props가 전달될 경우 경고를 표시하는 기능입니다.",
          "이를 통해 코드의 안정성을 높일 수 있습니다.",
        ],
      },
      {
        id: "react_18",
        question: "React의 컴포지션(Composition)이란 무엇인가요?",
        answers: [
          "컴포지션은 작은 컴포넌트를 조합하여 더 복잡한 컴포넌트를 구성하는 방식입니다.",
          "상속 대신 컴포지션을 통해 코드의 재사용성과 가독성을 높일 수 있습니다.",
        ],
      },
      {
        id: "react_19",
        question: "React의 Suspense와 Lazy는 무엇인가요?",
        answers: [
          "Suspense와 Lazy는 코드 스플리팅을 통해 컴포넌트를 지연 로드하는 데 사용됩니다.",
          "Lazy는 동적으로 컴포넌트를 로드하고, Suspense는 로드 중일 때 로딩 상태를 보여줍니다.",
        ],
      },
      {
        id: "react_20",
        question: "JSX란 무엇인가요?",
        answers: [
          "JSX는 JavaScript와 HTML을 결합한 문법으로, React에서 UI를 구성할 때 사용됩니다.",
          "JSX는 JavaScript 코드로 변환되어 브라우저에서 동작합니다.",
        ],
      },
    ],
  };

  if (subject === "all") {
    return Object.values(questions).reduce((acc, cur) => acc.concat(cur), []);
  } else {
    return questions[subject];
  }
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
