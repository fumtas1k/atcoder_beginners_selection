// PracticeA

fun main() {
  val a = readLine()!!.toInt()
  val (b, c) = readLine()!!.split(" ").map(String::toInt)
  val s = readLine()!!
  println("${a + b + c} $s")
}
