export function HeaderCommon() {
  return (
    <div>
      {/* <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <LogoDataExtractor
          LogoName={logoData[0].logoName}
          logoLink={logoData[0].logoLink}
        />
      </a> */}
      <a href="https://react.dev" target="_blank">
        {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}

        <LogoDataExtractor
          LogoName={logoData[1].logoName}
          logoLink={logoData[1].logoLink}
          someName="sojd"
        />
      </a>
      <h1>Vite + React</h1>
    </div>
  );
}
