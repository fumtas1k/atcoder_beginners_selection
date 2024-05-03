// ABC081B - Shift only

fun main() {
  val N = readLine()!!.toInt()
  val A = readLine()!!.split(" ").map(String::toInt).toIntArray()
  var cnt = 0
  while (A.all { it % 2 == 0 }) {
    repeat(N) { A[it] /= 2 }
    cnt++
  }
  println(cnt)
}
