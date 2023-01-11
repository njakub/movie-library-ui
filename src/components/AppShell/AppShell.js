import React, { useState, useEffect } from "react";
import Header from "../Header/Header";

function AppShell({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="min-h-screen px-8 mx-auto bg-white max-w-7xl sm:px-6">
          <div className="pt-4">{children}</div>
        </div>
      </main>
    </>
  );
}

export default AppShell;
