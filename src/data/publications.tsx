export type Pub = {
    year: number | string;
    authors: string;
    title: string;
    outlet?: string;
    locationDates?: string;     // konferanslar için tarih/şehir
    note?: string;              // [Paper Presentation], [Poster], Under Review vb.
    link?: string;              // DOI ya da URL
  };
  
  export const journalAndUnderReview: Pub[] = [
    {
      year: 2024,
      authors: "Osterhage, J. L., Caybas, U., Han, J., & Usher, E. L.",
      title:
        "“I Just Don’t Find it Interesting”: Academic Major and Time of Enrollment Predict Motivation in an Introductory Biology Course.",
      outlet: "Journal of Biological Education, 1–22.",
      link: "https://doi.org/10.1080/00219266.2024.2342801",
    },
    {
      year: "Under Review",
      authors: "Caybas, U., Tarim, S. D., & Capa-Aydin, Y.",
      title:
        "“Being Together Even Though We Were Apart”: Online Peer Interactions and Academic Motivation in Middle School During the Pandemic.",
    },
  ];
  
  export const conferencesNationalInternational: Pub[] = [
    {
      year: 2026,
      authors: "Caybas, U., Ergun, A. F., & Linnenbrink-Garcia, L.",
      title:
        "From Conversations to Comparisons: The Importance of Peers for Math Motivation",
      note: "[Paper Submitted]",
      outlet:
        "Annual Meeting of the American Educational Research Association",
      locationDates: "Los Angeles, CA (Apr 8–12, 2026)",
    },
    {
      year: 2026,
      authors:
        "Van Luven, W., Caybas, U., Neal, J. W., & Linnenbrink-Garcia, L.",
      title:
        "Peer Recognition and Math Identity Development: A Longitudinal Network Perspective",
      note: "[Paper Submitted]",
      outlet:
        "Annual Meeting of the American Educational Research Association",
      locationDates: "Los Angeles, CA (Apr 8–12, 2026)",
    },
    {
      year: 2026,
      authors:
        "Inoue, S., Van Luven, W., Caybas, U., Lee G. A., Taylor, M. R., Perez, T., & Linnenbrink-Garcia, L.",
      title:
        "Longitudinal Development of Science Interest and Self-Efficacy and Their Post-College Outcomes",
      note: "[Paper Submitted]",
      outlet:
        "Annual Meeting of the American Educational Research Association",
      locationDates: "Los Angeles, CA (Apr 8–12, 2026)",
    },
    {
      year: 2026,
      authors:
        "Van Luven, W., Lee G. A., Caybas, U., Inoue, S., Taylor, M. R., Jee, H., Melgar, G., Walton, S. P., & Linnenbrink-Garcia, L.",
      title:
        "Higher education is complex: Exploring the dynamic interplay among belonging, competence beliefs, role identity, and achievement in engineering students",
      note: "[Paper Submitted]",
      outlet:
        "Annual Meeting of the American Educational Research Association",
      locationDates: "Los Angeles, CA (Apr 8–12, 2026)",
    },
    {
      year: 2025,
      authors:
        "Caybas, U., Lee G. A., Van Luven, W., Inoue, S., Walton, S. P., & Linnenbrink-Garcia, L.",
      title:
        "Heterogeneous Joint Trajectories of Effort Cost and Attainment Value in Engineering Students Throughout College",
      note: "[Roundtable Presentation]",
      outlet:
        "Annual Meeting of the American Educational Research Association",
      locationDates: "Denver, CO (Apr 23–27, 2025)",
    },
    {
      year: 2025,
      authors:
        "Inoue, S., Lee, G. A., Caybas, U., Van Luven, W., Walton, S. P., & Linnenbrink-Garcia, L.",
      title:
        "Goal Profiles and Perceived Costs of International Asian and Asian American Students in Engineering",
      note: "[Poster Presentation]",
      outlet:
        "Annual Meeting of the American Educational Research Association",
      locationDates: "Denver, CO (Apr 23–27, 2025)",
    },
    {
      year: 2025,
      authors:
        "Van Luven, W., Lee G. A., Caybas, U., Inoue, S., Donnelly, M. B. D., Keane, J., Perez, T., & Linnenbrink-Garcia, L.",
      title:
        "The Role of Academic Emotions and Belonging in Predicting Science Persistence: A Cross-Lagged Approach",
      note: "[Poster Presentation]",
      outlet:
        "Annual Meeting of the American Educational Research Association",
      locationDates: "Denver, CO (Apr 23–27, 2025)",
    },
    {
      year: 2024,
      authors:
        "Caybas, U.,* Lee, G. A.*,^ Van Luven, W., Inoue, S., Donnelly, M. B. D., Linnenbrink-Garcia, L., & Perez, T.",
      title:
        "Validating Mental Health Cost: A New Dimension of Costs in Situated Expectancy-Value Theory?",
      note: "[Paper Presentation]",
      outlet: "International Conference on Motivation",
      locationDates: "Bern, Switzerland (Aug 28–30, 2024)",
    },
    {
      year: 2024,
      authors:
        "Keane, J., Caybas, U., Ferguson-Johnson, S., Perez, T., & Linnenbrink-Garcia, L.",
      title:
        "The Power of Growth Mindsets: Enhancing Women’s Science Motivation, Persistence and Achievement.",
      note: "[Paper Presentation]",
      outlet: "Network Gender & STEM Conference",
      locationDates: "Heidelberg, Germany (Jul 18–20, 2024)",
    },
    {
      year: 2024,
      authors: "Caybas, U.",
      title:
        "Exploring Socio-Motivational Dependency in Middle School Students: A Study on the Influence of Peer and Teacher Support on Motivation",
      note: "[Poster Presentation]",
      outlet:
        "Society for Research on Adolescence, Annual Meeting",
      locationDates: "Chicago, IL (Apr 18–20, 2024)",
    },
    {
      year: 2024,
      authors:
        "Caybas, U., Inoue, S., Van Luven, W. & Mansoor, S.",
      title:
        "Arab/MENA American Students’ Belonging to College Campuses",
      note:
        "[Paper Presentation] — Division C Graduate Student Shark Tank Competition",
      outlet:
        "Annual Meeting of the American Educational Research Association",
      locationDates: "Philadelphia, PA (Apr 11–14, 2024)",
    },
    {
      year: 2024,
      authors:
        "Caybas, U., Keane, J., Walton, S. P. & Linnenbrink-Garcia, L.",
      title:
        "Attainment value as a protective factor against the adverse effects of costs",
      note: "[Paper Presentation]",
      outlet:
        "Annual Meeting of the American Educational Research Association",
      locationDates: "Philadelphia, PA (Apr 11–14, 2024)",
    },
    {
      year: 2024,
      authors:
        "Keane, J., Lee, G. A., Caybas, U., Choi, G., & Linnenbrink-Garcia, L.",
      title:
        "Stability of Motivation in Introductory Statistics: A Random-Intercept Latent Transition Analysis.",
      note: "[Poster Presentation]",
      outlet:
        "Annual Meeting of the American Educational Research Association",
      locationDates: "Philadelphia, PA (Apr 11–14, 2024)",
    },
    {
      year: 2023,
      authors:
        "Caybas, U., Cole, A. E., Spillman, M. M.,^ Usher, E. L. & Han, J.",
      title:
        "Peer Influences on Motivation: A Review of 10 Years of AERA Scholarship",
      note: "[Poster Presentation]",
      outlet:
        "Annual Meeting of the American Educational Research Association",
      locationDates: "Chicago, IL (Apr 13–16, 2023)",
    },
    {
      year: 2023,
      authors:
        "Caybas, U., Patterson, J. T., Spillman, M. M.,^ Cole, A. E., Han, J., Usher, E. L., & Osterhage, J.",
      title:
        "“We motivate one another”: Peer influences on undergraduate students’ motivation in introductory biology",
      note: "[Roundtable Presentation]",
      outlet:
        "Annual Meeting of the American Educational Research Association",
      locationDates: "Chicago, IL (Apr 13–16, 2023)",
    },
    {
      year: 2022,
      authors:
        "Caybas, U., Capa-Aydin, Y., & Akkus-Cakir, N.",
      title:
        "Predictors of students’ subjective task values and expectancies for success at middle school",
      note: "[Paper Presentation]",
      outlet: "International Conference on Motivation",
      locationDates: "Dresden, Germany (Aug 22–26, 2022)",
    },
    {
      year: 2022,
      authors:
        "Caybas, U., Capa-Aydin, Y., & Tarim, S. D.",
      title:
        "Relation between support and students’ national exam performance: The mediating role of motivation",
      note: "[Paper Presentation]",
      outlet: "International Conference on Motivation",
      locationDates: "Dresden, Germany (Aug 22–26, 2022)",
    },
    {
      year: 2022,
      authors:
        "Osterhage, J., Caybas, U., Han, J., & Usher, E. L.",
      title:
        "“I’m not very into it”: Motivational and achievement differences between first-year and upper-level students in an introductory biology course",
      note: "[Paper Presentation]",
      outlet:
        "Society for the Advancement of Biology Education Research",
      locationDates: "Minneapolis, MN (Jul 7–10, 2022)",
    },
    {
      year: 2022,
      authors:
        "Caybas, U., Han, J., Usher, E. L., & Osterhage J.",
      title:
        "Instructor support during COVID-19: Investigating the relationship with undergraduate students’ motivation and achievement in STEM",
      note: "[Paper Presentation]",
      outlet: "Tenth SELF International Conference",
      locationDates: "Quebec City, Canada (Jun 9, 2022)",
    },
    {
      year: 2022,
      authors:
        "Caybas, U., Tarim, S. D., & Capa-Aydin, Y.",
      title:
        "Middle school students’ remote interaction and their influence on academic motivation during the Covid-19 pandemic",
      note: "[Poster Presentation]",
      outlet:
        "Annual Meeting of the American Educational Research Association",
      locationDates: "San Diego, CA (Apr 21–26, 2022)",
    },
    {
      year: 2021,
      authors:
        "Caybas, U., Acim, S. E., Kurtcu, E., Ozenc, E., & Yavuz, B.",
      title: "Children’s literacy club",
      note: "[Paper Presentation]",
      outlet:
        "Education Reform Initiative – 18th Good Practices in Education Conference",
      locationDates: "Istanbul, Turkey (Oct 1–8, 2021)",
    },
    {
      year: 2021,
      authors:
        "Caybas, U., Akkus-Cakir, N., & Capa-Aydin, Y.",
      title:
        "A study of homophily in peer group members’ academic motivation",
      note: "[Poster Presentation]",
      outlet:
        "European Association for Research on Learning and Instruction Biennial Meeting",
      locationDates: "Gothenburg, Sweden (Aug 23–27, 2021)",
    },
    {
      year: 2020,
      authors: "Caybas, U., & Capa-Aydin, Y.",
      title:
        "Development and validation of the expectancy-value scale for middle school students",
      note: "[Paper Presentation] — Conference cancelled",
      outlet: "European Educational Research Association",
      locationDates: "Glasgow, UK (Aug 25–28, 2020)",
    },
  ];
  
  export const conferencesLocalRegional: Pub[] = [
    {
      year: 2022,
      authors:
        "Caybas, U., Spillman, M. M.,^ Patterson, J. T., Cole, A. E., Han, J., Usher, E. L., & Osterhage, J.",
      title:
        "“I am more motivated to succeed when I am succeeding with a friend”: The Role of Peers in Undergraduate Students’ Motivation in Introductory Biology Courses",
      note: "[Research Presentation]",
      outlet: "Spring Research Conference",
      locationDates: "University of Kentucky, Lexington, KY (Apr 2, 2022)",
    },
    {
      year: 2021,
      authors:
        "Caybas, U., Osterhage, J., Han, J., & Usher, E. L.",
      title:
        "Instructor support during COVID-19: Relationship with undergraduate students’ motivation and achievement in STEM",
      note: "[Research Presentation]",
      outlet:
        "Teaching and Learning During Covid-19 Research Symposium",
      locationDates:
        "University of Kentucky, Lexington, KY (Dec 8, 2021)",
    },
  ];
  