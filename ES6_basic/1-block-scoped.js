export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var updatedTask = true;
    var updatedTask2 = false;
    return [updatedTask, updatedTask2]
  }

  return [task, task2];
}
