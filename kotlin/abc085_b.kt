// ABC085B - Kagami Mochi

fun main() {
  val N = readLine()!!.toInt()
  val D = List(N) { readLine()!!.toInt() }.toSet()
  println(D.size)
}
