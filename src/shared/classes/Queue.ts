import type { CommitTreeNode } from "@/src/api/CommitAPI";

/**
 * A generic Queue class following the First-In, First-Out (FIFO) principle.
 */
export default class Queue {
  private data: CommitTreeNode[] = []; // A private array to store queue elements

  exists(element: CommitTreeNode): boolean {
    return this.data.some(e => e.commit.id === element.commit.id);
  }

  /**
   * Adds an element to the back of the queue (O(1) time complexity).
   * @param element The element to add.
   */
  enqueue(element: CommitTreeNode): void {
    this.data.push(element); // Uses Array.prototype.push()
  }

  /**
   * Removes and returns the element from the front of the queue.
   * Note: This has a time complexity of O(n) due to the shift() operation.
   * @returns The first element in the queue, or undefined if the queue is empty.
   */
  dequeue(): CommitTreeNode | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.data.shift(); // Uses Array.prototype.shift()
  }

  /**
   * Returns the element at the front of the queue without removing it.
   * @returns The first element in the queue, or undefined if the queue is empty.
   */
  peek(): CommitTreeNode | undefined {
    return this.data.length > 0 ? this.data[0] : undefined;
  }

  /**
   * Checks if the queue is empty.
   * @returns True if the queue has no elements, false otherwise.
   */
  isEmpty(): boolean {
    return this.data.length === 0;
  }

  /**
   * Returns the number of elements in the queue.
   * @returns The size of the queue.
   */
  size(): number {
    return this.data.length;
  }
}
