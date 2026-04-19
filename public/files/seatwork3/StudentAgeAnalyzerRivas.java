package Seatwork;

import java.util.Scanner;

public class StudentAgeAnalyzerRivas {

    public static void greetUser() {
        Scanner input = new Scanner(System.in); // Declaration of Scanner input

        System.out.println("===== Student Age Analyzer =====");
        System.out.print("What is your name?: "); // Input
        String name = input.nextLine();

        System.out.print("What is your age?: "); // Input
        double age = input.nextDouble();

        String result = ageAnalyzer(name, age);
        System.out.println(result);

        input.close(); // Closes Scanner input
    }

    public static String ageAnalyzer(String name, double age) {

        if (age <= 12) { // Process
            return ("Hi " + name + ", you are a Child"); // Outputs
        } else if (age <= 19) {
            return ("Hi " + name + ", you are a Teenager"); // Outputs
        } else if (age <= 59) {
            return ("Hi " + name + ", you are an Adult"); // Outputs
        } else {
            return ("Hi " + name + ", you are a Senior Citizen"); // Outputs
        }
    }

    public static void main(String[] args) {
        greetUser();
    }
}
