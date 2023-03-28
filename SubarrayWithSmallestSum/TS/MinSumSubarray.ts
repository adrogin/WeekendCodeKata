class ArrayFrame {
    position: number;
    length: number;
    sum: number;

    constructor(newPosition: number, newSum: number, newLength: number) {
        this.position = newPosition;
        this.length = newLength;
        this.sum = newSum;
    }

    get Position() { return this.position }
    get Length() { return this.length }
    get Sum() { return this.sum }
}

class SubarrayFinder {
    range: Int32Array;

    constructor(newArray: Int32Array) {
        this.range = newArray;
    }

    CalcArraySum(fromIndex: number, toIndex: number) {
        return fromIndex == toIndex ? range[fromIndex] : this.CalcArraySum(fromIndex + 1, toIndex) + range[fromIndex];
    }

    CompareFramesGetMin(frame1: ArrayFrame, frame2: ArrayFrame) {
        return frame1.Sum < frame2.Sum ? frame1 : frame2;
    }
    
    FindMinFrame(minFrame: ArrayFrame, currFrame: ArrayFrame) {
        if (currFrame.Position == range.length - currFrame.Length) {
            return this.CompareFramesGetMin(minFrame, currFrame);
        }

        return this.FindMinFrame(
                    this.CompareFramesGetMin(minFrame, currFrame),
                    new ArrayFrame(
                        currFrame.Position + 1,
                        currFrame.Sum - range[currFrame.Position] + range[currFrame.Position + currFrame.Length],
                        currFrame.Length));
    }

    FindMinRange(rangeLen: number) {
        return this.FindMinFrame(new ArrayFrame(-1, Number.MAX_VALUE, 0), new ArrayFrame(0, this.CalcArraySum(0, rangeLen - 1), rangeLen));
    }
}

const InitRandomArray = function (length: number, maxValue: number) {
    let array = new Int32Array(length);

    function AssignArrayElement(elementNo: number) {
        array[elementNo] = Math.random() * maxValue;

        if (elementNo == array.length - 1)
            return;

        AssignArrayElement(elementNo + 1);
    }

    AssignArrayElement(0);
    return array;
}

const range = InitRandomArray(10, 10);
const subarrayFinder = new SubarrayFinder(range);

console.log(range);
console.log("\nSubset with the smallest sum:\n");
console.log(subarrayFinder.FindMinRange(3));
