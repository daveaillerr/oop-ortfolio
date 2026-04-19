# Midterm Activity #4 – Student Enrollment Assessment System

## Instructions

1. Create a Java program named `EnrollmentAssessmentSystemLastName`.
2. Import and use the `Scanner` class to accept user input.
3. Ask the user to input the following information:
   - Student Name
   - Senior High School Strand (STEM, ABM, HUMSS, TVL, Others)
   - Entrance Exam Score (0–100)
   - Interview Score (0–100)
   - First Screening Result (Pass/Fail)

4. Compute the **Final Evaluation Score** using the formula:

   ```
   FinalScore = (EntranceExam × 0.60) + (InterviewScore × 0.40)
   ```

5. Use a **nested if statement** to determine the admission result.

### Conditions:

- If First Screening = Pass
  - If FinalScore ≥ 85 → Admitted with Scholarship
  - If FinalScore ≥ 75 → Admitted
  - If FinalScore ≥ 65 → Waitlisted
  - Otherwise → Not Qualified

- If First Screening = Fail
  - Automatically Not Qualified

6. Use a **switch statement** to determine Program Recommendation based on the strand:

| Strand | Recommended Program     |
| ------ | ----------------------- |
| STEM   | BSIT / BSCS             |
| ABM    | BSBA                    |
| HUMSS  | BSED / AB Communication |
| TVL    | BSIT                    |
| Others | General Program         |

7. Display the result in the required format.

```bash
===== Enrollment Assessment System =====

Student Name: Maria Santos
SHS Strand: STEM
Final Evaluation Score: 82.50
Admission Result: Admitted
Recommended Program : BSIT / BSCS
```

---

## Requirements

Your program must use:

- `Scanner` class
- Nested if statement
- Switch statement
- Proper variable declarations
- Computation using formulas (**no hardcoding**)

---

## Submission Format

- Submit the Java source code file (`.java`).
- The filename must follow this format:  
  `Section_LastName_FirstName_ActivityName.java`

- Include screenshots of the program output showing the following:
  - User input
  - Program processing
  - Final output/result

- The screenshot must clearly display the entire console output.

---

## Academic Integrity Policy

- Students must write their own program.

### The following are NOT allowed:

- Copying code from classmates
- Sharing source code
- Downloading solutions from the internet

- Students with identical programs may receive a score of **0**.
