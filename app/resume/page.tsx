"use client"

import Image from "next/image"
import { Download } from "lucide-react"
import { aboutParagraphs } from "../data/about"
import { contactLinks, imagePaths } from "../data/externalLinks"
import { experiences } from "../data/experiences"
import { projects } from "../data/projectsData"
import { additionalSkills, coreSkills } from "../data/skillsData"
import { useTheme } from "../contexts/ThemeContext"

export default function ResumePage() {
  const { theme } = useTheme()
  const headerBg = theme === "turquoise" ? "#0d3d3d" : "#3d2e1f"
  const headingColor = theme === "turquoise" ? "text-[#0d3d3d]" : "text-[#3d2e1f]"
  const accentColor = theme === "turquoise" ? "#1a5c5c" : "#5c4731"
  const badgeBg = theme === "turquoise" ? "#e3f0ed" : "#f7f1e8"
  const badgeBorder = theme === "turquoise" ? "#c4ded9" : "#e5ddd0"

  const handleDownload = () => {
    window.print()
  }

  return (
    <div className="resume-page min-h-screen bg-quaternary py-12 print:py-0">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8 print:hidden">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-tertiary text-primary rounded-lg hover:bg-tertiary/80 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download as PDF
          </button>
        </div>

        <div className="bg-white shadow-lg print:shadow-none resume-container" id="resume">
          {/* Header */}
          <div
            className="text-white p-7 md:p-8 print:p-5 resume-header flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:flex-row print:items-center print:justify-between print:gap-6"
            style={{ backgroundColor: headerBg }}
          >
            <div className="min-w-0">
              <h1 className="text-4xl font-bold mb-2">Yiğit Can Özdemir</h1>
              <p className="text-xl mb-4">AI Engineer</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href={`mailto:${contactLinks.email}`} className="hover:underline">
                  {contactLinks.email}
                </a>
                <span>|</span>
                <a href={contactLinks.linkedin} className="hover:underline">
                  LinkedIn
                </a>
                <span>|</span>
                <a href={contactLinks.github} className="hover:underline">
                  GitHub
                </a>
                <span>|</span>
                <a href={contactLinks.portfolio} className="hover:underline">
                  Portfolio
                </a>
              </div>
            </div>
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/80 shrink-0 self-start sm:self-center">
              <Image
                src={imagePaths.profilePortrait}
                alt="Yiğit Can Özdemir portrait"
                fill
                className="object-cover"
                sizes="128px"
                priority
              />
            </div>
          </div>

          {/* About */}
          <div className="p-7 md:p-8 print:p-5 border-b border-gray-200 resume-section space-y-3">
            <h2 className={`text-2xl font-bold ${headingColor}`}>
              About Me
            </h2>
            <div className="space-y-3">
              {aboutParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="p-7 md:p-8 print:p-5 border-b border-gray-200 resume-section space-y-4">
            <h2 className={`text-2xl font-bold ${headingColor} resume-section-title`}>
              Experience
            </h2>
            <div className="space-y-4 experience-list">
              {experiences.map((exp, idx) => (
                <div key={exp.title + idx} className="resume-item space-y-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className={`${theme === "turquoise" ? "text-[#1a5c5c]" : "text-[#5c4731]"}`}>{exp.company}</p>
                    </div>
                    <span className="text-sm font-medium sm:text-right" style={{ color: accentColor }}>
                      {`${exp.period} • ${exp.location}`}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-gray-700 ml-4 marker:text-[#5c4731]">
                    {exp.achievements.map((achievement, i) => (
                      <li key={achievement + i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="p-7 md:p-8 print:p-5 border-b border-gray-200 resume-section space-y-3">
            <h2 className={`text-2xl font-bold ${headingColor} resume-section-title`}>
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium" style={{ color: accentColor }}>
                  Core
                </h3>
                <div className="flex flex-wrap gap-2">
                  {coreSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center rounded-full px-3 py-[6px] text-[11px] leading-tight"
                      style={{ color: accentColor, backgroundColor: badgeBg, borderColor: badgeBorder, borderWidth: 1, borderStyle: "solid" }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium" style={{ color: accentColor }}>
                  Additional
                </h3>
                <div className="flex flex-wrap gap-2">
                  {additionalSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full px-3 py-[6px] text-[11px] leading-tight"
                      style={{ color: accentColor, backgroundColor: badgeBg, borderColor: badgeBorder, borderWidth: 1, borderStyle: "solid" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="p-7 md:p-8 print:p-5 border-b border-gray-200 resume-section space-y-3">
            <h2 className={`text-2xl font-bold ${headingColor} resume-section-title`}>
              Featured Projects
            </h2>
            <div className="space-y-3">
              {projects.map((project, idx) => (
                <div key={project.title + idx} className="resume-item space-y-1">
                  <h3 className="text-lg font-semibold" style={{ color: accentColor }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-700">{project.description}</p>
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full px-[7px] py-[3px] text-[9.5px] leading-tight font-medium"
                          style={{ color: accentColor, backgroundColor: badgeBg, borderColor: badgeBorder, borderWidth: 1, borderStyle: "solid" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="text-sm" style={{ color: accentColor }}>
                      Live demo
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          html,
          body {
            background: #ffffff !important;
          }

          body {
            margin: 0;
            padding: 0;
          }
          @page {
            size: A4;
            margin: 0.75cm;
          }

          .resume-item {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .resume-page {
            min-height: auto !important;
            padding-top: 0.25cm !important;
            padding-bottom: 0.25cm !important;
            background: #ffffff !important;
          }

          .resume-container {
            max-width: 100%;
            box-shadow: none !important;
          }

          .print\\:hidden {
            display: none !important;
          }
          .print\\:py-0 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .print\\:p-6 {
            padding: 0.75rem !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }

          .p-7,
          .p-8,
          .resume-section {
            padding: 0.7rem !important;
          }

          h1 {
            font-size: 28px !important;
          }

          h2 {
            font-size: 20px !important;
            margin-bottom: 0.25rem !important;
            page-break-after: avoid;
          }

          h3 {
            font-size: 15px !important;
            page-break-after: avoid;
          }

          p,
          li {
            font-size: 13px !important;
            line-height: 1.4 !important;
          }

          .resume-section {
            margin-bottom: 0.01rem !important;
          }

          .resume-header {
            background-color: ${headerBg} !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .resume-container,
          .resume-page {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* let experience items flow instead of forcing full-card to next page */
          .experience-list .resume-item {
            break-inside: auto;
            page-break-inside: auto;
          }
        }
      `}</style>
    </div>
  )
}
