import java.util.Scanner;

public class BSIT23_Rivas_DaveAillerr_BasicATMSystem {
public static void main(String[] args) {
// Declare input scanner
Scanner input = new Scanner(System.in);

        // Variable declaration
        int answer = 0;
        double withdraw = 0;
        double deposit = 0;
        double currentBalance = 5000;

        do {
            // Prints Menu
            System.out.println("==== ATM MENU ====");
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit");
            System.out.println("3. Withdraw");
            System.out.println("4. Exit");

            // Ask user for selecting options
            System.out.print("\nPlease enter your choice: ");
            answer = input.nextInt();

            switch (answer) {
                case 1:
                    // Check current balance
                    System.out.println("==== Checking your current balance ====");
                    System.out.println("Current Balance: " + currentBalance);
                    System.out.println("=======================================\n");
                    break;
                case 2:
                    // Deposit logic
                    System.out.println("==== Depositing Money ====");
                    System.out.print("Enter deposit amount: ");
                    deposit = input.nextDouble();
                    currentBalance += deposit; // Add deposit to current balance
                    System.out.println("=======================================");
                    System.out.println("Deposit Successful! New Balance: " + currentBalance);
                    System.out.println("=======================================\n");
                    break;
                case 3:
                    // Withdrawal logic
                    System.out.println("==== Withdrawing Money ====");
                    System.out.print("Enter withdraw amount: ");
                    withdraw = input.nextDouble();

                    if (withdraw > 2000) {
                        System.out.println("=======================================");
                        System.out.println("Maximum withdrawal exceeded. (2000 pesos)");
                        System.out.println("=======================================\n");
                    } else if (currentBalance < withdraw) {
                        System.out.println("=======================================");
                        System.out.println("Not enough balance to withdraw.");
                        System.out.println("=======================================\n");
                    } else {
                        currentBalance = currentBalance - withdraw;
                        System.out.println("=======================================");
                        System.out.println("Withdrawal Successful! New Balance: " + currentBalance);
                        System.out.println("=======================================\n");
                    }
                    break;
                case 4:
                    System.out.println("=======================================");
                    System.out.println("                Exiting... ");
                    System.out.println("=======================================\n");
                    break;
                default:
                    System.out.println("Please enter a valid choice.");
                    break;
            }
        } while (answer != 4);
        input.close();
    }

}
