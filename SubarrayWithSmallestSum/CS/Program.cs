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
            Action<int> AssignArrayElement = null;

            AssignArrayElement = elementNo => {
                range[elementNo] = rand.Next(maxValue);

                if (elementNo == range.Length - 1) {
                    return;
                }

                AssignArrayElement(elementNo + 1);
            };

            AssignArrayElement(0);
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
