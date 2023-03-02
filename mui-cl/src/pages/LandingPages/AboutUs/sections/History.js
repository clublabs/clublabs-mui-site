// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import "./history.css";

// animate
import "animate.css";

// Images
import img1 from "assets/images/past1.jpg";
import img2 from "assets/images/past2.jpg";
import img3 from "assets/images/past3.jpg";
import img4 from "assets/images/past4.jpg";
import img5 from "assets/images/past5.jpg";
import img55 from "assets/images/past5-1.jpg";
import img6 from "assets/images/past6.jpg";
import img7 from "assets/images/past7.jpg";
import img8 from "assets/images/past8.jpg";
import img9 from "assets/images/past9.jpg";
import img10 from "assets/images/past10.jpg";
import img11 from "assets/images/past11.jpg";
import smog from "assets/images/smog.jpg";

function History() {
  return (
    <MKBox component="section" pt={1} my={3}>
      <Container>
        <Grid container>
          <section className="about-timeline">
            <div className="wrapper inner-wrapper-padding">
              <div className="start-point">
                <div className="black-dot" />
                <MKTypography variant="h4">The beginning</MKTypography>
                <div className="corner bl" />
              </div>

              <div className="timeline-main">
                <div className="timeline-row">
                  <div className="timeline-box timeline-content-img logo-timeline-arrow">
                    <div className="timeline-box-wrap">
                      <h6>1906</h6>
                      <div className="timeline-content">
                        <img
                          className="animate__animated animate__fadeIn animate__delay-2s"
                          alt="history"
                          src={img1}
                        />
                        <div className="timeline-content-txt">
                          <p>
                            Increased automobile use meant people ventured into unknown territories
                            and needed better marked pathways.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-box timeline-content-img logo-timeline-arrow">
                    <div className="timeline-box-wrap">
                      <h6>1909</h6>
                      <div className="timeline-content">
                        <div className="timeline-content-txt">
                          <p>
                            Information on locations and distances gathered from posting road signs
                            evolved into the first of the Auto Club’s countless maps
                          </p>
                        </div>
                        <img
                          className="animate__animated animate__fadeIn animate__delay-3s"
                          alt="history"
                          src={img2}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="horizontal-line" />
                  <div className="verticle-line" />
                  <div className="corner top" />
                  <div className="corner bottom" />
                </div>

                <div className="timeline-row">
                  <div className="timeline-box img-right timeline-content-img">
                    <div className="timeline-box-wrap">
                      <h6>1924</h6>
                      <div className="timeline-content">
                        <div className="timeline-content-txt">
                          <p>
                            Breakdowns were inevitable, and the Auto Club inaugurated emergency
                            roadside service, which remains a signature member benefit.
                          </p>
                        </div>
                        <img
                          className="animate__animated animate__fadeIn animate__delay-2s"
                          alt="history"
                          src={img3}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="timeline-box ">
                    <div className="timeline-box-wrap">
                      <h6>1930</h6>
                      <div className="timeline-content">
                        <div className="timeline-content-txt">
                          <p>
                            The Auto Club’s headquarters in Los Angeles more than doubled in size
                            after an early 1930s expansion
                          </p>
                        </div>
                        <img
                          className="animate__animated animate__fadeIn animate__delay-3s"
                          alt="history"
                          src={img4}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="timeline-box img-right timeline-content-img top-timeline-arrow">
                    <div className="timeline-box-wrap">
                      <h6>1938</h6>
                      <div className="timeline-content">
                        <div className="timeline-content-txt">
                          <p>
                            Auto Club provided registrations for more than 170,000 member vehicles.
                          </p>
                        </div>
                        <img
                          className="animate__animated animate__fadeIn animate__delay-3s"
                          alt="history"
                          src={img5}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="horizontal-line" />
                  <div className="verticle-line" />
                  <div className="corner top" />
                  <div className="corner bottom" />
                </div>
                <div className="timeline-row">
                  <div className="timeline-box img-left timeline-content-img">
                    <div className="timeline-box-wrap">
                      <h6>1942</h6>
                      <div className="timeline-content">
                        <div className="timeline-content-txt">
                          <p>
                            The Auto Club promoted conservation efforts plus rationing and scrap
                            drives, and created special maps and signs
                          </p>
                        </div>
                        <img
                          className="animate__animated animate__fadeIn animate__delay-2s"
                          alt="history"
                          src={img55}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="timeline-box timeline-content-img">
                    <div className="timeline-box-wrap">
                      <h6>1950</h6>
                      <div className="timeline-content">
                        <div className="timeline-content-txt">
                          <p>
                            The 1950s marked the beginning of extensive freeway building in America,
                            here symbolized by the Los Angeles 4-level interchange.
                          </p>
                        </div>
                        <img
                          className="animate__animated animate__fadeIn animate__delay-2s"
                          alt="history"
                          src={img6}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="timeline-box ">
                    <div className="timeline-box-wrap">
                      <h6>1967</h6>
                      <div className="timeline-content">
                        <div className="timeline-content-txt">
                          <p>
                            The Auto Club’s Automotive Research Center opened the same year to study
                            air pollution and test vehicle emissions.
                          </p>
                        </div>
                        <img
                          className="animate__animated animate__fadeIn animate__delay-3s"
                          alt="history"
                          src={smog}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="horizontal-line" />
                  <div className="verticle-line" />
                  <div className="corner top" />
                  <div className="corner bottom" />
                </div>
                <div className="timeline-row">
                  <div className="timeline-box ">
                    <div className="timeline-box-wrap">
                      <h6>1972</h6>
                      <div className="timeline-content">
                        <div className="timeline-content-txt">
                          <p>
                            An Auto Club Service Patrol El Camino powered by liquified petroleum gas
                            poses before Yosemite’s Half Dome in this colorful 1972 scene.
                          </p>
                        </div>
                        <img
                          className="animate__animated animate__fadeIn animate__delay-3s"
                          alt="history"
                          src={img7}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="timeline-box timeline-content-img">
                    <div className="timeline-box-wrap">
                      <h6>1982</h6>
                      <div className="timeline-content">
                        <div className="timeline-content-txt">
                          <p>
                            The new Processing Center opened in Costa Mesa to house insurance
                            operations and systems.
                          </p>
                        </div>
                        <img
                          className="animate__animated animate__fadeIn animate__delay-3s"
                          alt="history"
                          src={img8}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="timeline-box img-right timeline-content-img">
                    <div className="timeline-box-wrap">
                      <h6>1995</h6>
                      <div className="timeline-content">
                        <div className="timeline-content-txt">
                          <p>Auto Club began offering services online.</p>
                        </div>
                        <img
                          className="animate__animated animate__fadeIn animate__delay-3s"
                          alt="history"
                          src={img9}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="horizontal-line" />
                  <div className="verticle-line" />
                  <div className="corner top" />
                  <div className="corner bottom" />
                </div>
                <div className="timeline-row">
                  <div className="timeline-box timeline-content-img">
                    <div className="timeline-box-wrap">
                      <h6>2008</h6>
                      <div className="timeline-content">
                        <div className="timeline-content-txt">
                          <p>
                            California Speedway was renamed Auto Club Speedway in recognition of
                            Auto Club sponsorship.
                          </p>
                        </div>
                        <img
                          className="animate__animated animate__fadeIn animate__delay-3s"
                          alt="history"
                          src={img10}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="timeline-box ">
                    <div className="timeline-box-wrap">
                      <h6>2012</h6>
                      <div className="timeline-content">
                        <div className="timeline-content-txt">
                          <p>
                            Electric-vehicle charging stations were added at Auto Club locations in
                            Los Angeles
                          </p>
                        </div>
                        <img
                          className="animate__animated animate__fadeIn animate__delay-3s"
                          alt="history"
                          src={img11}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="timeline-box img-left timeline-content-img">
                    <div className="timeline-box-wrap">
                      <h6>2016</h6>
                      <div className="timeline-content">
                        <div className="timeline-content-txt">
                          <p>
                            Auto Club Enterprises websites reached a record of more than 30 million
                            annual visits.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="horizontal-line" />
                  <div className="verticle-line" />
                  <div className="corner top" />
                  <div className="corner bottom" />
                  <div className="start-point end-point">
                    <h4>The present</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default History;
