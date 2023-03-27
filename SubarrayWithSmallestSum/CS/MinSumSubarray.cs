namespace MinSumSubarray
{
    class ArrayFrame
    {
        public int Position { get; }
        public int Sum { get; }
        public int Length { get; }

        public ArrayFrame(int position, int sum, int length)
        {
            Position = position;
            Sum = sum;
            Length = length;
        }

        public override string ToString()
        {
            return string.Format("Position: {0}\nLength: {1}\nSum: {2}\n", Position, Length, Sum);
        }
    }

    class SubarrayFinder
    {
        private int[] range;

        public SubarrayFinder(int[] newArray)
        {
            range = newArray;
        }

        private int CalcArraySum(int fromIndex, int toIndex)
        {
            return fromIndex == toIndex ? range[fromIndex] : CalcArraySum(fromIndex + 1, toIndex) + range[fromIndex];
        }

        private ArrayFrame CompareFramesGetMin(ArrayFrame frame1, ArrayFrame frame2)
        {
            return frame1.Sum < frame2.Sum ? frame1 : frame2;
        }

        private ArrayFrame FindMinRange(ArrayFrame minFrame, ArrayFrame currFrame)
        {
            return
                currFrame.Position == range.Length - currFrame.Length ?
                    CompareFramesGetMin(minFrame, currFrame) :

                    FindMinRange(
                        CompareFramesGetMin(minFrame, currFrame),
                        new ArrayFrame(currFrame.Position + 1, currFrame.Sum - range[currFrame.Position] + range[currFrame.Position + currFrame.Length], currFrame.Length));
        }

        public ArrayFrame FindMinRange(int rangeLen)
        {
            return FindMinRange(new ArrayFrame(-1, int.MaxValue, 0), new ArrayFrame(0, CalcArraySum(0, rangeLen - 1), rangeLen));
        }
    }
}
