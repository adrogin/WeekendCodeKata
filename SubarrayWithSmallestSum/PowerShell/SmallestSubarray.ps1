class ArrayFrame {
    [int]$Position
    [int]$Length
    [int]$Sum
}

function InitRandomArray {
    Param(
        [int]$length,
        [int]$maxValue
    )

    $array = @()
    for ($i = 0; $i -lt $length; $i++) {
        $array += (Get-Random -Maximum $maxValue)
    }

    return $array
}

function CalcArraySum {
    Param(
        [int[]]$array
    )

    if ($array.Length -eq 1) {
        return $array[0]
    }

    return (CalcArraySum $array[1..($array.Length - 1)]) + $array[0]
}

function FindMinRange {
    Param(
        [ArrayFrame]$minFrame,
        [ArrayFrame]$currFrame
    )

    if ($currFrame.Position -eq $range.Count - $currFrame.Length) {
        return (CompareFramesGetMin $minFrame $currFrame)
    }

    FindMinRange `
        -minFrame (CompareFramesGetMin $minFrame $currFrame) `
        -currFrame ( `
            [ArrayFrame]@{
                Position = $currFrame.Position + 1
                Sum = $currFrame.Sum - $range[$currFrame.Position] + $range[$currFrame.Position + $currFrame.Length]
                Length = $currFrame.Length
            })
}

function CompareFramesGetMin() {
    Param(
        [ArrayFrame]$frame1,
        [ArrayFrame]$frame2
    )

    if ($frame1.Sum -lt $frame2.Sum) {
        return $frame1
    }

    return $frame2
}

$range = InitRandomArray 10 10
$subsetLen = 3

$range

Write-Host "`nSubset with the smallest sum:`n"
FindMinRange `
    -minFrame ([ArrayFrame]@{
        Position = -1
        Sum = [int]::MaxValue
    }) `
    -currFrame ([ArrayFrame]@{
        Position = 0
        Sum = CalcArraySum $range[0..($subsetLen - 1)]
        Length = $subsetLen
    }) | Out-Host
