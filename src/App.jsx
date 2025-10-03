import React, { useRef } from "react";

function App() {
  const featureRef = useRef(null);
  const faqRef = useRef(null);
  const downloadRef = useRef(null);

  const scrollToFeature = () => {
    featureRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFAQ = () => {
    faqRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDownload = () => {
    downloadRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div style={{ backgroundColor: "#2e213f" }}>
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32" aria-hidden="true">
              <use xlink:href="#bootstrap"></use>
            </svg>
            <span class="fs-4" style={{ color: "white" }}>
              Rewind - A Free AI Video Upscaler
            </span>
          </a>
          <ul class="nav nav-pills mx-2">
            <li class="nav-item">
              <a
                onClick={scrollToFeature}
                href="#"
                class="nav-link"
                aria-current="page"
                style={{ color: "white" }}
              >
                Features
              </a>
            </li>
            <li class="nav-item">
              <a
                onClick={scrollToFAQ}
                href="#"
                class="nav-link"
                aria-current="page"
                style={{ color: "white" }}
              >
                FAQ
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://buymeacoffee.com/rewind.app"
                class="btn btn-sm"
                style={{ backgroundColor: "#f6727f", color: "white" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                </svg>
                &nbsp;&nbsp;Donate
              </a>
            </li>
          </ul>
        </header>
      </div>
      {/* <div>
        <nav
          class="navbar"
          style={{ backgroundColor: "#6a4c92", color: "white" }}
        >
          <div class="container-fluid">Rewind - AI Video Upscaler</div>
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Features
            </a>
          </li>
        </nav>
      </div> */}

      <div class="px-4 pt-2 my-5 text-center border-bottom">
        <img
          src="https://raw.githubusercontent.com/goetzrrGit/rewind_app/refs/heads/main/icon.png"
          class="img-fluid border rounded-3 shadow-lg mb-4"
          alt="Rewind Icon"
          width="128"
          height="128"
          loading="lazy"
        />
        <h1 class="display-4 fw-bold text-body-emphasis">
          Transform Your Video Memories for Free!
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Bring back cherished home videos to their full potential with
            cutting-edge AI technology. <br></br>
            <br></br>Psst...Rewind can convert modern HD videos too 4k and above too<br></br>
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="button"
              class="btn btn-lg px-4 me-sm-3"
              style={{ backgroundColor: "#f6727f", color: "white" }}
              onClick={scrollToDownload}
            >
              Download Now<span> </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#FFFFFF"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
            </button>
          </div>
        </div>
        <div class="overflow-hidden">
          <div class="container">
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/UV4e40Upkmc?si=JZDS_g7jZ5y4kpJ-"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          Tom and Jerry: A Swiss Tricks <br></br>240p upscaled to 1080p
        </div>
      </div>
      <div class="b-example-divider"></div>

      <div class="container px-4 py-5" ref={featureRef}>
        <h2 class="pb-2 border-bottom">Features</h2>
        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div class="col d-flex flex-column align-items-start gap-2">
            <img
              src="https://github.com/goetzrrGit/rewind_app/blob/main/main_app.png?raw=true"
              class="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
            <h2 class="fw-bold text-body-emphasis">Truly Free</h2>
            <p class="text-body-secondary">
              Forget relying on external cloud services or monthly credits for
              your video processing! You can upscale unlimited amounts of videos
              directly on your own computer.
            </p>
          </div>
          <div class="col">
            <div class="row row-cols-1 row-cols-sm-2 g-4">
              <div class="col d-flex flex-column gap-2">
                <div
                  class="d-inline-flex align-items-center justify-content-center fs-4 rounded-3"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#6a4c92",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M323-160q-11 0-20.5-5.5T288-181l-78-139h58l40 80h92v-40h-68l-40-80H188l-57-100q-2-5-3.5-10t-1.5-10q0-4 5-20l57-100h104l40-80h68v-40h-92l-40 80h-58l78-139q5-10 14.5-15.5T323-800h97q17 0 28.5 11.5T460-760v160h-60l-40 40h100v120h-88l-40-80h-92l-40 40h108l40 80h112v200q0 17-11.5 28.5T420-160h-97Zm217 0q-17 0-28.5-11.5T500-200v-200h112l40-80h108l-40-40h-92l-40 80h-88v-120h100l-40-40h-60v-160q0-17 11.5-28.5T540-800h97q11 0 20.5 5.5T672-779l78 139h-58l-40-80h-92v40h68l40 80h104l57 100q2 5 3.5 10t1.5 10q0 4-5 20l-57 100H668l-40 80h-68v40h92l40-80h58l-78 139q-5 10-14.5 15.5T637-160h-97Z" />
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Video Upscaling for Ultra-High Resolutions
                </h4>
                <p class="text-body-secondary">
                  Use AI algorithms to upscale your videos
                  instantly, including support for 8K and above resolution on supported
                  hardware. Whether it's a short clip, a memos reel, an old or
                  new TV show, this app transforms your videos into vibrant,
                  HD-quality versions.
                </p>
              </div>
              <div class="col d-flex flex-column gap-2">
                <div
                  class="d-inline-flex align-items-center justify-content-center fs-4 rounded-3"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#6a4c92",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M360-360v-240h240v240H360Zm80-80h80v-80h-80v80Zm-80 320v-80h-80q-33 0-56.5-23.5T200-280v-80h-80v-80h80v-80h-80v-80h80v-80q0-33 23.5-56.5T280-760h80v-80h80v80h80v-80h80v80h80q33 0 56.5 23.5T760-680v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T680-200h-80v80h-80v-80h-80v80h-80Zm320-160v-400H280v400h400ZM480-480Z" />
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  AI Power in your hands
                </h4>
                <p class="text-body-secondary">
                  Leverages the full potential of your computer's GPU and CPU to
                  deliver top-tier results without requiring high-end servers or
                  credits.
                </p>
              </div>
              <div class="col d-flex flex-column gap-2">
                <div
                  class="d-inline-flex align-items-center justify-content-center fs-4 rounded-3"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#6a4c92",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M480-720q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720ZM360-80v-520H120v-80h720v80H600v520h-80v-240h-80v240h-80Z" />
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Easy to apply filters
                </h4>
                <p class="text-body-secondary">
                  Use filters to improve the quality of old videos and bring
                  them to high definition quality
                </p>
              </div>
              <div class="col d-flex flex-column gap-2">
                <div
                  class="d-inline-flex align-items-center justify-content-center fs-4 rounded-3"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#6a4c92",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z" />
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Batch Processing
                </h4>
                <p class="text-body-secondary">
                  Batch process multiple videos at once, saving time and effort.
                  Perfect for users who want generate ultra-high-resolution
                  files simultaneously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="container px-4 py-5" ref={faqRef}>
          <h2 class="pb-2 border-bottom">Frequently Asked Questions</h2>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  style={{
                    "--bs-accordion-active-bg": "#6a4c92",
                    "--bs-accordion-active-color": "white",
                  }}
                >
                  Do I need a GPU (Graphics Card)?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  For Rewind to work, you need a Vulkan-compatible graphics
                  card, like those from Nvidia or AMD. You should also be fine
                  using Apple M-Series chips (M1, M2, M3, etc.) and APUs
                  (Accelerated Processing Units). However, we don't recommend
                  using iGPUs (integrated graphics) because they generally don't
                  perform well enough.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  style={{
                    "--bs-accordion-active-bg": "#6a4c92",
                    "--bs-accordion-active-color": "white",
                  }}
                >
                  How long does processing take?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Processing speed depends on your computer's specs, especially
                  the GPU. A powerful gaming PC can process videos much faster
                  than a standard one. For example, an RTX 3060 GPU from a
                  gaming laptop took about 80 minutes to upscale a 22-minute
                  video to 1080p
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                  style={{
                    "--bs-accordion-active-bg": "#6a4c92",
                    "--bs-accordion-active-color": "white",
                  }}
                >
                  Is Rewind Resource Heavy?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Rewind is designed to be as efficient as possible with both
                  disk space and memory while it's processing. Rewind will
                  process videos at the highest quality without any loss of
                  quality (lossless). While processing video, your project's
                  folder can range from 10 GB to 100 GB depending on the final
                  output quality, like 1080p or 4K.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container px-4 py-5 border-0">
        <h2 class="pb-2 border-bottom">Download</h2>
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  Convinced yet? Download and try for yourself
                </h5>
                <p class="card-text" ref={downloadRef}>
                  Rewind support Windows, Mac, and Linux<br></br>
                  <br></br>
                </p>
                <div class="row align-items-center">
                  <div class="col">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ backgroundColor: "#6a4c92", color: "white" }}
                      >
                        Windows, Macos, and Linux
                      </button>
                      <ul
                        class="dropdown-menu"
                        // style={{ backgroundColor: "#f6727f" }}
                      >
                        <li>
                          <a class="dropdown-item" href="https://github.com/goetzrrGit/rewind_app/releases/download/v1.0.0/rewind-windows-x86_64.zip">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 4875 4875"
                              height="24px"
                              width="24px"
                            >
                              <path
                                fill="#000000ff"
                                d="M0 0h2311v2310H0zm2564 0h2311v2310H2564zM0 2564h2311v2311H0zm2564 0h2311v2311H2564"
                              />
                            </svg>
                            &nbsp;&nbsp;Windows (x86_64)
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <svg
                              fill="#000000ff"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 50 50"
                              width="24px"
                              height="24px"
                            >
                              <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z" />
                            </svg>
                            &nbsp;&nbsp;Apple Silicon (arm64) - comming soon
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="https://github.com/goetzrrGit/rewind_app/releases/download/v1.0.0/rewind-linux-x86_64.zip">
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000ff"
                              stroke="#000000ff"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <title>linux</title>
                                <path d="M14.62,8.35c-.42.28-1.75,1-1.95,1.19a.82.82,0,0,1-1.14,0c-.2-.16-1.53-.92-1.95-1.19s-.45-.7.08-.92a6.16,6.16,0,0,1,4.91,0c.49.21.51.6,0,.9m7.22,7.28A19.09,19.09,0,0,0,18,10a4.31,4.31,0,0,1-1.06-1.88c-.1-.33-.17-.67-.24-1A11.32,11.32,0,0,0,16,4.47,4.06,4.06,0,0,0,12.16,2,4.2,4.2,0,0,0,8.21,4.4a5.9,5.9,0,0,0-.46,1.34c-.17.76-.32,1.55-.5,2.32a3.38,3.38,0,0,1-1,1.71,19.53,19.53,0,0,0-3.88,5.35A6.09,6.09,0,0,0,2,16c-.19.66.29,1.12,1,1,.44-.09.88-.18,1.3-.31s.57,0,.67.35a6.73,6.73,0,0,0,4.24,4.5c4.12,1.56,8.93-.66,10-4.58.07-.27.17-.37.47-.27.46.14.93.24,1.4.35a.72.72,0,0,0,.92-.64,1.44,1.44,0,0,0-.16-.73"></path>
                              </g>
                            </svg>
                            &nbsp;&nbsp;Linux (x86_64)
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Become a Supporter</h5>
                <p class="card-text">
                  Your support allows me to dedicate more time to adding new
                  features and fixing bugs.
                </p>
                <a
                  href="https://buymeacoffee.com/rewind.app"
                  class="btn"
                  style={{ backgroundColor: "#f6727f", color: "white" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                  </svg>
                  &nbsp;&nbsp;Donate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        {" "}
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          {" "}
          <div class="col-md-4 d-flex align-items-center">
            {" "}
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
              aria-label="Bootstrap"
            >
              {" "}
              <svg class="bi" width="30" height="24" aria-hidden="true">
                <use xlink:href="#bootstrap"></use>
              </svg>{" "}
            </a>{" "}
            <span class="mb-3 mb-md-0 text-body-secondary">
              <h5>Contact</h5>
              rewind.develop@gmail.com
            </span>{" "}
          </div>{" "}
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            {" "}
            <li class="ms-3">
              <a class="text-body-secondary" href="#" aria-label="Instagram">
                <svg class="bi" width="24" height="24" aria-hidden="true">
                  <use xlink:href="#instagram"></use>
                </svg>
              </a>
            </li>{" "}
            <li class="ms-3">
              <a class="text-body-secondary" href="#" aria-label="Facebook">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#facebook"></use>
                </svg>
              </a>
            </li>{" "}
          </ul>{" "}
        </footer>{" "}
      </div>
    </>
  );
}

export default App;
