import java.util.Scanner;

public class EnrollmentAssessmentSystemRivas {

    public static double calculateFinalScore(int entranceScore, int interviewScore) {
        // Formula to calculate
        double finalScore = (entranceScore * 0.60) + (interviewScore * 0.40);
        return finalScore;
    }

    public static String admissionResult(String firstScreening, double finalScore) {
        // Converts to lowercase to ensure format
        firstScreening = firstScreening.toLowerCase();

        // Returns String message depending on the conditions
        if (firstScreening.equals("pass")) {
            if (finalScore >= 85) {
                return "Admitted with Scholarship";
            } else if (finalScore >= 75) {
                return "Admitted";
            } else if (finalScore >= 65) {
                return "Waitlisted";
            } else {
                return "Not Qualified";
            }
        } else if (firstScreening.equals("fail")) {
            return "Not Qualified";
        } else {
            return "Invalid Input!";
        }
    }

    public static String programRecommendation(String shsStrand) {
        // Converts to uppercase to ensure format
        shsStrand = shsStrand.toUpperCase();

        // Returns String message
        switch (shsStrand) {
            case "STEM":
                return "BSIT / BSCS";
            case "ABM":
                return "BSBA";
            case "HUMSS":
                return "BSED / AB Communication";
            case "TVL":
                return "BSIT";
            case "OTHERS":
                return "General Program";
            default:
                return "Invalid Strand!";
        }
    }

    public static void displayResult(String Name, String Strand, double FinalEval, String AdmissionResult,
            String RecoProgram) {

        // Displays everything
        System.out.println("\n===== ENROLLMENT ASSESSMENT RESULT =====\n");
        System.out.println("Student Name: " + Name);
        System.out.println("SHS Strand: " + Strand);
        System.out.println("Final Evaluation Score: " + FinalEval);
        System.out.println("Admission Result: " + AdmissionResult);
        System.out.println("Recommended Program: " + RecoProgram);
    }

    public static void main(String[] args) {
        // Declare input scanner
        Scanner input = new Scanner(System.in);

        // Variable initialization
        String studentName;
        String shsStrand;
        int entranceScore;
        int interviewScore;
        String firstScreening;

        System.out.println("===== ENROLLMENT ASSESSMENT SYSTEM =====\n");
        System.out.print("Enter your Name: ");
        studentName = input.nextLine();
        System.out.print("Enter your Senior High School Strand: ");
        shsStrand = input.nextLine();
        System.out.print("Enter your Entrance Exam Score: ");
        entranceScore = input.nextInt();
        System.out.print("Enter your Interview Score: ");
        interviewScore = input.nextInt();
        input.nextLine(); // Consume the newline left in the buffer
        System.out.print("Enter your result for the first screening (Pass/Fail): ");
        firstScreening = input.nextLine();

        // Calls every function and assign to varaible for other function to use
        double finalScoreResult = calculateFinalScore(entranceScore, interviewScore);
        String admissionMessage = admissionResult(firstScreening, finalScoreResult);
        String programResult = programRecommendation(shsStrand);
        // Calls display result function
        displayResult(studentName, shsStrand, finalScoreResult, admissionMessage, programResult);

        input.close();
    }

}
