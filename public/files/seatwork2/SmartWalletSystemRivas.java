import java.util.Scanner;

public class SmartWalletSystemRivas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int transaction_counter = 1;
        float balance = 5000;
        int choice;

        System.out.println("===== SMART WALLET MENU =====\n"
                + "1. View Balance\n"
                + "2. Cash In\n"
                + "3. Send Money\n"
                + "4. Exit");

        while (true) {

            System.out.println("\nTransaction " + transaction_counter + ": ");
            System.out.print("Choice: ");
            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.println("Output: Balance = " + balance);
                    transaction_counter++;
                    break;
                case 2:
                    System.out.print("Cash In: ");
                    float cash_in = scanner.nextFloat();
                    if (cash_in <= 0) {
                        System.out.println("Invalid amount.");
                    } else {
                        balance += cash_in;
                        transaction_counter++;
                        System.out.println("Output: New Balance = " + balance);
                    }
                    break;
                case 3:
                    System.out.print("Send Money: ");
                    float send_money = scanner.nextFloat();
                    if (send_money < 100) {
                        System.out.println("Output: Minimum amount is 100");
                    } else if (send_money > 1500) {
                        System.out.println("Output: Exceeds maximum limit");
                    } else if (send_money > balance) {
                        System.out.println("Amount exceeds current balance");
                    } else {
                        balance -= send_money;
                        transaction_counter++;
                        System.out.println("Money sent successfully");
                        System.out.println("New Balance: " + balance);
                    }
                    break;
                case 4:
                    System.out.println("\nTransaction Count: " + (transaction_counter - 1));
                    scanner.close();
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid!");
            }
        }
    }
}