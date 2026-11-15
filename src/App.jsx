import { useState } from "react";
import CourseList from "./components/CourseList.jsx";

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="topline">OPEN SOURCE STUDIO · WEEK 11</p>
          <h1>나의 수강 과목</h1>
          <p className="subtitle">이번 학기 수강 과목과 완료 상태</p>
        </div>
        <span className="tag">STUDENT STARTER</span>
      </header>
      <CourseList />
      <footer className="bottom">
        <span>OSS Week 11 · React</span>
        <span>Local state only · Refresh resets data</span>
      </footer>
    </main>
  );
}
