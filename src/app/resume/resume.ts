import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AfterViewInit } from '@angular/core';
import _gsap from 'gsap/gsap-core';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume implements AfterViewInit {
   ngAfterViewInit() {
    setTimeout(() => {
    gsap.from('.interns', {
      scrollTrigger: {
        trigger: '.interns',
        start: 'top 80%', 
      },
      y: 60,         
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,    
      ease: 'power2.out'
    });
  },100);
 
     setTimeout(() => {
    gsap.from('.colleges',{
       scrollTrigger: {
        trigger: '.colleges',
        start: 'top 80%',
      },
       y: 60,          
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,    
      ease: 'power2.out'
    });
  },100);

      setTimeout(() => {
     gsap.from('.skills-list',{
       scrollTrigger: {
        trigger: '.skills-list',
        start: 'top 80%',
      },
       y: 60,          
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,    
      ease: 'power2.out'
    });
  },100);

  }
  internships = [
    {
      role: 'FRONTEND DEVELOPMENT INTERN',
      company: 'CODESHIP PRIVATE LIMITED',
      duration: 'Dec 2025 – Apr 2026',
      points: [
        'Developed responsive web pages using Angular, HTML5, CSS3, and Bootstrap.',
        'Improved UI responsiveness and cross-device user experience for client-facing applications.',
        'Worked on component-based architecture using Angular to build reusable UI elements.'
      ]
    },
    {
      role: 'WEB DEVELOPMENT INTERN',
      company: 'INTEGRAL COACH FACTORY (ICF), Chennai — Govt. of India',
      duration: 'May 2025 – Jun 2025',
      points: [
        'Built a dynamic production dashboard with real-time data visualization and MySQL database integration.',
        'Developed modules to track coach production KPIs including daily/monthly reports and asking rate calculations.',
        'Integrated REST APIs to fetch and display live production data on the dashboard.'
      ]
    },
    {
      role: 'CYBERSECURITY TRAINING PROGRAM',
      company: 'ISAN DATA SYSTEMS',
      duration: 'Jan 2024 – Feb 2024',
      points: [
        'Completed structured training covering core security concepts and threat detection.',
        'Gained foundational knowledge of cybersecurity best practices and safe computing.'
      ]
    },
    {
      role: 'DATA SCIENCE TRAINING PROGRAM',
      company: 'VIBA EDU SERV',
      duration: 'Feb 2023 – May 2023',
      points: [
        'Attended instructor-led training on ML basics, Python/R, data wrangling, and visualization.',
        'Built foundational understanding of statistics and data science workflows.'
      ]
    }
  ];
  educations=[
    {
      degree:'MASTERS IN COMPUTER APPLICATION',
      college:'Ethiraj College for Women',
      duration: '2024 - 2026',
    },
    {
      degree:'BACHOLERS IN COMPUTER APPLICATION',
      college:'Shri Shankarlal Sundarbai Shasun Jain College For Women',
      duration: '2021 - 2024',
    }
  ];
  skills = [
  {
    category: 'Web & Frontend',
    items: ['Angular', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript (ES6+)', 'REST APIs', 'Responsive Design']
  },
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'Dart (Flutter)', 'C++']
  },
  {
    category: 'AI & Data',
    items: ['Machine Learning', 'Deep Learning', 'NumPy', 'Pandas', 'Power BI', 'MySQL']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'Arduino IDE', 'Jupyter Notebook']
  }
];

}

