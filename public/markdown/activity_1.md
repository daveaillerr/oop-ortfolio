# Activity #1 – Variables

## Instructions

• Carefully analyze the given Java program.  
• Trace the references and memory changes step-by-step.  
• Complete all required tables and questions.  
• Show your logical reasoning where necessary.  
• Write your answers in a yellow paper (handwritten).  
• Take a clear photo or scan of your work.  
• Upload your file in Canvas on or before the deadline.  
• Submission Format: Section_LastName_FirstName_CodeAnalysisActivity#1.pdf

---

## Please review the code below.

```java
class Account {
    String owner;
    double balance;

    Account(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }
}

public class TestAccount {
    public static void main(String[] args) {

        Account acc1 = new Account("Carlos", 5000);
        Account acc2 = new Account("Diana", 7000);
        Account acc3 = acc1;

        acc2.balance = 8000;
        acc3.owner = "Miguel";

        System.out.println(acc1.owner + " " + acc1.balance);
        System.out.println(acc2.owner + " " + acc2.balance);
        System.out.println(acc3.owner + " " + acc3.balance);
    }
}
```

## PART A – VARIABLE IDENTIFICATION TABLE

| Variable Name | Data Type | Variable Type | Stored In |
| ------------- | --------- | ------------- | --------- |
|               |           |               |           |
|               |           |               |           |
|               |           |               |           |
|               |           |               |           |
|               |           |               |           |

---

## PART B: Explanation. Please see example below.

| Statement | What Happens? | Memory Impact |
| --------- | ------------- | ------------- |
|           |               |               |
|           |               |               |
|           |               |               |
|           |               |               |
|           |               |               |

---

## PART C – OUTPUT
