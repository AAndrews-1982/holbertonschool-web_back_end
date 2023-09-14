export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const value = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.toString);
  }
    queue.push('Guardrail was processed');
    return queue;
}
