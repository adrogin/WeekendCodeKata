using System;
using MinSumSubarray;

namespace MinSumSubarray
{
    class Program
    {
        static int[] InitRandomArray(int length, int maxValue)
        {
            int[] range = new int[length];
            Random rand = new Random();

            for (int i = 0; i < length; i++)
            {
                range[i] = rand.Next(maxValue);
            }

            return range;
        }

        static void Main(string[] args)
        {
            int[] range = InitRandomArray(10, 10);
            SubarrayFinder subarrayFinder = new SubarrayFinder(range);
            
            Array.ForEach(range, Console.WriteLine);

            Console.Write(subarrayFinder.FindMinRange(3).ToString());
        }
    }
}
