<h1 align="center">덴버 월드</h1>
<p align="center"><strong>첫 번째 프론트엔드 Vue.js 포트폴리오</strong></p>

<p align="center">
  <a href="https://nodejs.org/ko/" rel="nofollow"><img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" /></a>
  <a href="https://www.mysql.com/" rel="nofollow"><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="Node.js" /></a>
  <a href="https://kr.vuejs.org/" rel="nofollow"><img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vue.js&logoColor=white" alt="Vue.js" /></a>
</p>

<blockquote align="center">덴버 월드는 Node.js와 MySQL을 사용해서 간단한 게시물 등록, 수정, 삭제가 가능한 첫 번째 프론트엔드 Vue.js 포트폴리오입니다.</blockquote>

<p align="center">
  <a href="http://cf24denver.cafe24app.com/">둘러보기</a>
</p>

## 목차
* [기능](#기능)
* [자주 묻는 질문](#자주-묻는-질문)
* [HTML Markup Guide](#html-markup-guide)
* [브라우저 호환성](#브라우저-호환성)

## 기능
* `메인` 페이지는 **많이 본 소식**과 **전체 카테고리** 링크, 각 카테고리별 **최근 게시물**을 <a href="https://github.com/OwlCarousel2/OwlCarousel2" rel="nofollow">Owl Carousel</a> **jQuery** plugin을 사용해서 이미지 슬라이드 형태로 만들었습니다.

  상단 **좌측**의 삼선을 클릭하면 **사용자 정보**와 **주메뉴**가 나타납니다.
  
  상단 **우측**에는 [로그인](http://cf24denver.cafe24app.com/member/login) 및 [회원가입](http://cf24denver.cafe24app.com/welcome) 페이지로 이동할 수 있는 링크를 제공하고 있습니다.
  <details>
    <summary>코드 보기</summary>
  
    [메인]()
  </details>
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/001.png)
  </details>
* `회원가입` 페이지에서 **\*** 표시된 부분은 **필수 입력**입니다.

  ✅**아이디**는 **알파벳 소·대문자**, **숫자**, **\-\.\_** 를 입력 가능하고 **4자리 이상 8자리 이하**로 입력해 주세요.

  ✅**패스워드**는 **알파벳 소문자**, **숫자**, **특수문자**를 **하나 이상 포함**하고 **6자리 이상 12자리 이하**로 입력해 주세요. (🔒 **bcrypt**로 입력하신 패스워드를 **암호화**합니다.)

  ✅**닉네임**은 **한글과 알파벳**, **숫자**만 입력 가능하고 **2자리 이상 6자리 이하**로 입력해 주세요.

  ✅**이메일**을 올바르게 입력해 주세요.
  <details>
    <summary>코드 보기</summary>
  
    [회원가입]()
  </details>
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/002.png)

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/003.png)
  </details>
* `로그인` 성공 시 **JWT Token**을 발급합니다.
  <details>
    <summary>코드 보기</summary>
  
    [로그인]()
  </details>
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/004.png)
  </details>
* `회원정보 수정` 페이지에서 **\*** 표시된 부분은 **필수 입력**입니다.

  ✅**닉네임**은 **한글과 알파벳**, **숫자**만 입력 가능하고 **2자리 이상 6자리 이하**로 입력해 주세요.

  ✅**이메일**을 올바르게 입력해 주세요.
  <details>
    <summary>코드 보기</summary>
  
    [회원정보 수정]()
  </details>
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/005.png)
  </details>
* `글 목록`
  <details>
    <summary>코드 보기</summary>
  
    [글 목록]()
  </details>
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/007.png)

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/009.png)
  </details>
* `글 등록` 페이지는 <a href="https://www.vue2editor.com/" rel="nofollow">vue2-editor</a>를 사용해서 만들었고, <ins>로그인하지 않은 상태일 경우 접근할 수 없습니다.</ins>
  <details>
    <summary>코드 보기</summary>
  
    [글 등록]()
  </details>
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/008.png)
  </details>
* `글 상세` 페이지는 **일반 게시판**과 **블로그** 두 가지 디자인을 사용하고 있습니다.
  <details>
    <summary>코드 보기</summary>
  
    [글 상세]()
  </details>
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/010.png)
  </details>
* `글 수정`은 <ins>작성자만 수정할 수 있으며,</ins> <a href="https://www.vue2editor.com/" rel="nofollow">vue2-editor</a>를 사용해서 만들었습니다.
  <details>
    <summary>코드 보기</summary>
  
    [글 수정]()
  </details>
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/011.png)
  </details>
  
## 자주 묻는 질문
<details>
  <summary>왜 <strong>jQuery</strong> plugin을 사용했어요?</summary>

  오래된 서비스일 경우 jQuery를 사용해서 기능을 만든 곳들이 많습니다. 이런 서비스를 SI/SM 업무에서 과감히 jQuery를 걷어내고 처음부터 기능을 만들기에는 솔직히 작업 일정과 검수 일정이 온전하지 못합니다. 😨
  
  그렇기 때문에 실무에서 jQuery로 만들어진 기능을 Vue.js에 자연스럽게 녹이는 방법을 알아보기 위해 사용해 봤습니다. 😄
</details>

## HTML Markup Guide
[https://github.com/github-denver/guide.markup](https://github.com/github-denver/guide.markup)

## 브라우저 호환성
<table>
  <thead>
    <tr>
      <th colspan="6">
        <span></span>
        <span>Desktop</span>
      </th>
      <th colspan="6">
        <span></span>
        <span>Mobile</span>
      </th>
    </tr>
    <tr>
      <th>
        <span>Chrome</span>
      </th>
      <th>
        <span>Edge</span>
      </th>
      <th>
        <span>Firefox</span>
      </th>
      <th>
        <span>Internet Explorer</span>
      </th>
      <th>
        <span>Opera</span>
      </th>
      <th>
        <span>Safari</span>
      </th>
      <th>
        <span>WebView Android</span>
      </th>
      <th>
        <span>Chrome Android</span>
      </th>
      <th>
        <span>Firefox for Android</span>
      </th>
      <th>
        <span>Opera Android</span>
      </th>
      <th>
        <span>Safari on iOS</span>
      </th>
      <th>
        <span>Samsung Internet</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span>&nbsp;</span>
      </td>
      <td>
        <span>&nbsp;</span>
      </td>
      <td>
        <span>&nbsp;</span>
      </td>
      <td>
        <span>&nbsp;</span>
      </td>
      <td>
        <span>&nbsp;</span>
      </td>
      <td>
        <span>&nbsp;</span>
      </td>
      <td>
        <span>&nbsp;</span>
      </td>
      <td>
        <span>&nbsp;</span>
      </td>
      <td>
        <span>&nbsp;</span>
      </td>
      <td>
        <span>&nbsp;</span>
      </td>
      <td>
        <span>&nbsp;</span>
      </td>
      <td>
        <span>&nbsp;</span>
      </td>
    </tr>
  </tbody>
</table>
