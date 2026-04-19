import java.util.Scanner;

public class ExpenseTrackerRivas {

    public static void greetUser() {
        System.out.println("        ╔═══════════════════════════════════════╗");
        System.out.println("        ║      ███████╗ ██╗   ██╗  ██████╗      ║");
        System.out.println("        ║      ██╔════╝  ██╗ ██╔╝  ██╔══██╗     ║");
        System.out.println("        ║      █████╗      ██╔═╝   ██████╔╝     ║");
        System.out.println("        ║      ██═══╝    ██╝ ██╗   ██╔═══╝      ║");
        System.out.println("        ║      ███████╗ ██╗   ██╗  ██║          ║");
        System.out.println("        ║      ╚══════╝ ╚═╝   ╚═╝  ╚═╝          ║");
        System.out.println("        ║        EXPENSE TRACKER SYSTEM         ║");
        System.out.println("        ╚═══════════════════════════════════════╝");
        System.out.println("> Greetings, User! Welcome to your expense tracker system...");
        System.out.println("    1. Calculate Total Expense");
        System.out.println("    2. Check Budget");
        System.out.println("    3. Display Expense and Budget");
        System.out.println("    4. Exit");
    }

    public static double calculateTotalExpense(double food, double transportation, double savings, double others) {
        // Adds all category parameters
        double sumOfExpense = food + transportation + savings + others;
        return (sumOfExpense);
    }

    public static String checkExceedBudget(double sumOfExpense, double currentBudget) {

        if (sumOfExpense > currentBudget) {
            return "WARNING: Total expenses exceed the budget.";
        } else {
            return " Total expenses do not exceed the budget. ";
        }

    }

    public static void displayExpenseBudget(double sumOfExpense, String budgetStatus) {
        System.out.println("╔══════════════════════════════════════════╗");
        System.out.println("║     ==== Expense & Budget Summary ===    ║");
        System.out.println("╚══════════════════════════════════════════╝");
        System.out.println("> Total Expenses: " + sumOfExpense);
        System.out.println("> Budget Status: " + budgetStatus);
        System.out.println("════════════════════════════════════════════");
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double sumOfExpense = 0;
        String budgetStatus = "No budget input.";
        double currentBudget = 0;
        double food = 0, transportation = 0, savings = 0, others = 0;

        // Greets user with title screen
        greetUser();
        // Menu program
        while (true) {

            System.out.print("\n> Please enter your choice: ");
            int ans = input.nextInt();

            switch (ans) {
                case 1:
                    System.out.println(" === Calculating Total Expense... === ");

                    // Asks for food expense
                    System.out.print("> How much is your food expense?: ");
                    food = input.nextDouble();

                    // Asks for transportation expense
                    System.out.print("> How much is your transportation expense?: ");
                    transportation = input.nextDouble();

                    // Additional Expense Category: Asks for savings expense
                    System.out.print("> How much is your savings expense?: ");
                    savings = input.nextDouble();

                    // Asks for other expenses
                    System.out.print("> How much is your other expenses?: ");
                    others = input.nextDouble();

                    // Go to method to calculate
                    sumOfExpense = calculateTotalExpense(food, transportation, savings, others);
                    // Prints the sum
                    System.out.println("> Here's your total expenses: " + sumOfExpense);
                    break;

                case 2:
                    System.out.println(" === Checking Expense and Budget... === ");
                    System.out.print("> Enter current budget: ");
                    currentBudget = input.nextDouble();
                    budgetStatus = checkExceedBudget(sumOfExpense, currentBudget);

                    // Prints budget status
                    System.out.println("╔════════════════════════════════════════════╗");
                    System.out.println("║ " + budgetStatus + " ║");
                    System.out.println("╚════════════════════════════════════════════╝");
                    break;

                case 3:
                    // Prints and display expense and budget
                    displayExpenseBudget(sumOfExpense, budgetStatus);
                    break;
                case 4:
                    // Exits the whole program
                    System.out.println(" === Exiting System... === ");
                    System.exit(0);
                    break;
                default:
                    // Checks for validation
                    System.out.println(" WARNING: Please enter valid choice!");
                    break;
            }
            input.close();
        }
    }

}
