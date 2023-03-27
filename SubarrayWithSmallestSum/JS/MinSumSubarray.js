"use strict"

class ArrayFrame
{
    constructor(newPosition, newSum, newLength) {
        this.position = newPosition;
        this.length = newLength;
        this.sum = newSum;
    }

    get Position() { return this.position }
    get Length() { return this.length }
    get Sum() { return this.sum }
}

class SubarrayFinder
{
    constructor(newArray) {
        this.range = newArray;
    }

    CalcArraySum(fromIndex, toIndex) {
        return fromIndex == toIndex ? range[fromIndex] : this.CalcArraySum(fromIndex + 1, toIndex) + range[fromIndex];
    }

    CompareFramesGetMin(frame1, frame2) {
        return frame1.Sum < frame2.Sum ? frame1 : frame2;
    }
    
    FindMinFrame(minFrame, currFrame) {
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

    FindMinRange(rangeLen) {
        return this.FindMinFrame(new ArrayFrame(-1, Number.MAX_SAFE_INTEGER, 0), new ArrayFrame(0, this.CalcArraySum(0, rangeLen - 1), rangeLen));
    }
}

function InitRandomArray(length, maxValue) {
    const array = new Int32Array(length);

    for (var i = 0; i < length; i++) {
        array[i] = Math.round(Math.random() * maxValue);
    }

    return array;
}

const range = InitRandomArray(10, 10);
const subarrayFinder = new SubarrayFinder(range);

console.log(range);
console.log("\nSubset with the smallest sum:\n");
console.log(subarrayFinder.FindMinRange(3));
