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

## 기능
* `메인` 페이지는 **많이 본 소식**과 **전체 카테고리** 링크, 각 카테고리별 **최근 게시물**을 <a href="https://github.com/OwlCarousel2/OwlCarousel2" rel="nofollow">Owl Carousel</a> **jQuery** plugin을 사용해서 이미지 슬라이드 형태로 만들었습니다.

  상단 **좌측**의 메뉴 버튼을 클릭하면 현재 로그인 상태를 확인할 수 있는 영역과 주메뉴 영역이 노출되고 **우측**에서는 [로그인](http://cf24denver.cafe24app.com/member/login) 및 [회원가입](http://cf24denver.cafe24app.com/welcome) 페이지로 이동할 수 있는 링크를 제공하고 있습니다.

  <details>
  <summary>왜 <strong>jQuery</strong> plugin을 사용했어요?</summary>
  </details>

  <details>
    <summary>코드 보기</summary>
  
    [로그인](https://github.com/github-denver/frontend.vue.denver.world/blob/master/src/components/common/Index.vue)
  </details>
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/001.png)
  </details>
* `회원가입` 내용을 작성해 주세요. [코드 보기]()
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/002.png)

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/003.png)
  </details>
* `로그인` 내용을 작성해 주세요. [코드 보기]()
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/004.png)
  </details>
* `회원정보 수정` 내용을 작성해 주세요. [코드 보기]()
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/005.png)
  </details>
* `글 목록` 내용을 작성해 주세요. [코드 보기]()
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/007.png)

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/009.png)
  </details>
* `글 등록` 내용을 작성해 주세요. [코드 보기]()
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/008.png)
  </details>
* `글 상세` 내용을 작성해 주세요. [코드 보기]()
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/010.png)
  </details>
* `글 수정` 내용을 작성해 주세요. [코드 보기]()
  <details>
    <summary>화면 보기</summary>

    ![](https://raw.githubusercontent.com/github-denver/images/master/community/images/011.png)
  </details>

## HTML Markup Guide
[https://github.com/github-denver/guide.markup](https://github.com/github-denver/guide.markup)

## Browser Support
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
        <span></span>
      </td>
      <td>
        <span></span>
      </td>
      <td>
        <span></span>
      </td>
      <td>
        <span></span>
      </td>
      <td>
        <span></span>
      </td>
      <td>
        <span></span>
      </td>
      <td>
        <span></span>
      </td>
      <td>
        <span></span>
      </td>
      <td>
        <span></span>
      </td>
      <td>
        <span></span>
      </td>
      <td>
        <span></span>
      </td>
      <td>
        <span></span>
      </td>
    </tr>
  </tbody>
</table>
