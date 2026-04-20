import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Terms.css";
import "./Midterm.css";
import saveBtnIcon from "../assets/save-btn.svg";
import upDownBtnIcon from "../assets/up-down-btn.svg";

// ── DATA STRUCTURES ──────────────────────────────────────────────────────────

interface MidtermItem {
  label: string;
  title: string;
  markdownPath?: string;
  filename?: string;
  codePath?: string;
  learnings?: string;
  files?: string[];
}

const midtermContent: Record<Tab, MidtermItem[]> = {
  quizzes: [
    {
      label: "Quiz",
      title: "Midterm Quiz #1",
      learnings:
        "In this quiz, I learned about control flow statements in Java such as if-else, switch, and loops, which are used to control the flow of program execution based on conditions. I also learned about input and output in Java using the Scanner class, BufferedReader, and Console class for user input and System.out.println for displaying results. In addition, I understood the concept of methods, which are blocks of code used to organize programs and make them reusable and easier to manage. Overall, the quiz helped me understand how control flow, input/output, and methods work together to create functional Java programs.",
    },
  ],
  seatwork: [
    {
      label: "Seatwork",
      title: "Midterm Seatwork #1 - Operators and Expressions",
      learnings:
        "In this seatwork, I learned about the different operators and expressions in Java. I also learned how to evaluate expressions in Java without using anything but my hands and brain. It was challenging at first but I got the hang of it eventually.",
      markdownPath: "",
    },
    {
      label: "Seatwork",
      title: "Midterm Seatwork #2 - Smart Wallet System",
      learnings: "",
      markdownPath: "/markdown/seatwork_2.md",
      filename: "SmartWalletSystemRivas.java",
      files: [
        "/files/seatwork2/BSIT2-3_Rivas_DaveAillerr_SmartWalletSystem.pdf",
        "/files/seatwork2/SmartWalletRivas.java",
      ],
    },
    {
      label: "Seatwork",
      title: "Midterm Seatwork #3 - Student Age Analyzer",
      learnings: "",
      markdownPath: "/markdown/seatwork_3.md",
      filename: "StudentAgeAnalyzerRivas.java",
      files: [
        "/files/seatwork3/BSIT_Rivas_DaveAillerr_StudentAgeAnalyzer.pdf",
        "/files/seatwork3/StudentAgeAnalyzerRivas.java",
      ],
    },
  ],
  activities: [
    {
      label: "Activity",
      title: "Midterm Activity #1 - Variables",
      learnings: "",
      markdownPath: "/markdown/activity_1.md",
      files: [
        "/files/Activity1/BSIT2-3_Rivas_DaveAillerr_CodeAnalysisActivity1.pdf",
      ],
    },
    {
      label: "Activity",
      title: "Midterm Activity #2 - Operators",
      learnings: "",
      markdownPath: "/markdown/activity_2.md",
      files: [
        "/files/Activity2/BSIT2-3_Rivas_DaveAillerr_OperatorsActivity2.pdf",
      ],
    },
    {
      label: "Activity",
      title: "Midterm Activity #3 - Basic ATM System",
      learnings: "",
      markdownPath: "/markdown/activity_3.md",
      codePath: "/markdown/code_activity_3.md",
      filename: "BSIT23_Rivas_DaveAillerr_BasicATMSystem.java",
      files: [
        "/files/Activity3/BSIT2-3_Rivas_DaveAillerr_BasicATMSystem.pdf",
        "/files/Activity3/BSIT23_Rivas_DaveAillerr_BasicATMSystem.java",
      ],
    },

    {
      label: "Activity",
      title: "Midterm Activity #4 - Scholarship Qualification System",
      learnings: "",
      markdownPath: "/markdown/activity_4.md",
      codePath: "/markdown/code_activity_4.md",
      filename: "EnrollmentAssessmentSystemRivas.java",
      files: [
        "/files/Activity4/BSIT2-3_Rivas_DaveAillerr_StudentEnrollmentAssessmentSystem.pdf",
        "/files/Activity4/EnrollmentAssessmentSystemRivas.java",
      ],
    },
    {
      label: "Activity",
      title: "Midterm Activity #5 - Personal Expense Tracker",
      learnings: "",
      markdownPath: "/markdown/activity_5.md",
      codePath: "/markdown/code_activity_5.md",
      filename: "ExpenseTrackerRivas.java",
      files: [
        "/files/Activity5/ExpenseTrackerRivas.pdf",
        "/files/Activity5/ExpenseTrackerRivas.java",
      ],
    },
  ],
  others: [
    {
      label: "Others",
      title: "About Me",
      learnings:
        "I learned a little bit about myself in this activity. Also shared my expectations for this subject.",
      markdownPath: "/markdown/about_me.md",
      files: ["/files/others/RIVAS_AboutMe.pdf"],
    },
    {
      label: "Assignment",
      title: "Midterm Assignment #1 - Introduction to Java",
      learnings:
        "In this assignment, I learned that Java is a high-level, object-oriented programming language known for its simplicity and security, and one of its key features is platform independence, which allows programs to run on different systems through the Java Virtual Machine (JVM). I also learned the main components of a Java program, such as classes, methods, and variables, as well as the differences between JDK, JRE, and JVM. Additionally, I understood that Java is both compiled and interpreted, since the code is first compiled into bytecode and then executed by the JVM. Overall, this activity helped me better understand how Java works and why it is widely used.",
      markdownPath: "/markdown/assignment_1.md",
      files: ["/files/others/RIVAS_MidtermAssignment.pdf"],
    },
  ],
  exam: [
    {
      label: "Exam Reflection",
      title: "Midterm Exam Recap",
      learnings:
        "Going into the exam, I felt confident about encapsulation and constructors. I found some questions on method overloading tricky, which showed me I need more practice distinguishing overloading from overriding.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

type Tab = "quizzes" | "seatwork" | "activities" | "others" | "exam";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "quizzes", label: "Quizzes", icon: "📝" },
  { id: "seatwork", label: "Seatwork", icon: "✏️" },
  { id: "activities", label: "Activities", icon: "💻" },
  { id: "others", label: "Others", icon: "🔗" },
  { id: "exam", label: "Midterm Exam", icon: "📄" },
];

const WindowFrame: React.FC<{
  children: React.ReactNode;
  filename?: string;
  isCode?: boolean;
}> = ({ children, filename, isCode }) => (
  <div
    className={`window-frame-animated ${isCode ? "code-window" : "markdown-window"}`}
  >
    <div className="code-header">
      <div className="code-dots">
        <span />
        <span />
        <span />
      </div>
      <span>{filename}</span>
    </div>
    <div className="window-content">{children}</div>
  </div>
);

interface TermOutputCardProps {
  label: string;
  title: string;
  description?: string;
  markdownPath?: string;
  filename?: string;
  codePath?: string;
  learnings?: string;
  files?: string | string[];
  isExpanded: boolean;
  onToggle: () => void;
}

const TermOutputCard: React.FC<TermOutputCardProps> = ({
  label,
  title,
  description,
  markdownPath,
  filename,
  codePath,
  learnings,
  files,
  isExpanded,
  onToggle,
}) => {
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [codeContent, setCodeContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          if (markdownPath) {
            const res = await fetch(markdownPath);
            const text = await res.text();
            setMarkdownContent(text);
          }
          if (codePath) {
            const res = await fetch(codePath);
            const text = await res.text();
            setCodeContent(text);
          }
        } catch (err) {
          console.error("Failed to fetch markdown:", err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [isExpanded, markdownPath, codePath]);

  const hasCollapsible = !!(markdownPath || codePath);

  const formattedCode =
    codeContent && !codeContent.trim().startsWith("```")
      ? `\`\`\`java\n${codeContent}\n\`\`\``
      : codeContent;

  const downloadAll = () => {
    // 1. Determine what we are downloading
    const targetLinks: string[] = [];

    // Only download files explicitly placed in the files array
    if (files && files.length > 0) {
      if (typeof files === "string") targetLinks.push(files);
      else targetLinks.push(...files);
    }

    // 2. Safely Process and Download simultaneously
    targetLinks.forEach((link, i) => {
      // Clean accidental public paths
      let cleanPath = link.startsWith("/public") ? link.substring(7) : link;

      // Ensure bare file names route gracefully to the /files/ folder
      if (!cleanPath.startsWith("/") && !cleanPath.startsWith("http")) {
        cleanPath = `/files/${cleanPath}`;
      }

      const encodedPath = cleanPath
        .split("/")
        .map((segment) => encodeURIComponent(segment))
        .join("/");

      setTimeout(() => {
        const a = document.createElement("a");
        a.href = encodedPath;
        // Keep the original filename
        a.download = cleanPath.split("/").pop() || "download";

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, i * 300);
    });
  };

  return (
    <div className="card terms-card">
      <div className="card-header-flex">
        <div>
          <p className="card-label-meta">{label}</p>
          <p className="card-title card-title-lg">{title}</p>
        </div>
        <div className="card-actions">
          {files && files.length > 0 && (
            <button onClick={downloadAll} className="download-btn">
              <img src={saveBtnIcon} alt="Download" className="filter" />
            </button>
          )}
          {hasCollapsible && (
            <button onClick={onToggle} className="code-toggle-btn">
              {isExpanded ? (
                <img src={upDownBtnIcon} alt="Hide" className="filter Hide" />
              ) : (
                <img src={upDownBtnIcon} alt="View" className="filter" />
              )}
            </button>
          )}
        </div>
      </div>

      {description && <p className="card-description">{description}</p>}

      {isExpanded && isLoading && (
        <div className="loading-state">Loading content...</div>
      )}

      {isExpanded && !isLoading && markdownContent && (
        <WindowFrame filename="document.md">
          <div className="markdown-container">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus as any}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {markdownContent}
            </ReactMarkdown>
          </div>
        </WindowFrame>
      )}

      {isExpanded && !isLoading && formattedCode && (
        <WindowFrame filename={filename || "code.java"} isCode>
          <div className="code-block attached">
            <div className="markdown-inside-code">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus as any}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {formattedCode}
              </ReactMarkdown>
            </div>
          </div>
        </WindowFrame>
      )}

      {learnings && (
        <div className="learnings-box">
          <p className="learnings-label">LEARNINGS</p>
          <p className="learnings-text">{learnings}</p>
        </div>
      )}
    </div>
  );
};

const Midterm: React.FC = () => {
  const [active, setActive] = useState<Tab>("quizzes");
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <p className="section-label-terms">Term 1</p>
          <h1 className="section-title-terms">Midterm Outputs</h1>
          <p className="section-sub-terms">
            All quizzes, seatworks, activities, and exam content from the
            midterm period.
          </p>

          {/* Tab bar */}
          <div className="tab-container">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setActive(t.id);
                  setExpanded(null); // Reset expansion on tab switch
                }}
                className={`tab-btn ${active === t.id ? "active" : ""}`}
              >
                <span className="icon">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>

          <div className="tab-panel-animated">
            {midtermContent[active].map((item, i) => (
              <TermOutputCard
                key={`${active}-${i}`} // Use more unique key to prevent component reuse
                label={item.label}
                title={item.title}
                markdownPath={item.markdownPath}
                codePath={item.codePath}
                filename={item.filename}
                learnings={item.learnings}
                files={item.files}
                isExpanded={expanded === i}
                onToggle={() => setExpanded(expanded === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          Midterm Period &middot; Object-Oriented Programming
        </div>
      </footer>
    </div>
  );
};

export default Midterm;
