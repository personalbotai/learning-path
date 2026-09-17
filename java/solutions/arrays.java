import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] nums = {5, 2, 9, 1};
        System.out.println("Original: " + Arrays.toString(nums));

        Arrays.sort(nums);
        System.out.println("Sorted: " + Arrays.toString(nums));

        int[] copy = Arrays.copyOf(nums, 10);
        System.out.println("Copy length: " + copy.length);

        int sum = 0;
        for (int n : nums) sum += n;
        System.out.println("Sum = " + sum);
    }
}