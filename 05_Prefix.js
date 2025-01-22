let arr = ["ABC", "ABD", "ABCD"]

function prefix(a) {
    let size = a.length
    if (size == 0)
        return ""
    if (size == 1)
        return a[0]
    a.sort()
    console.log(a)
    let end = Math.min(a[0].length, a[size - 1].length)

    let i = 0;
    while (i < end && a[0][i] == a[size - 1][i])
        i++;

    let prefix = a[0].slice(0, i);
    return prefix;
}

console.log(prefix(arr))