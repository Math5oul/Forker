import { Component, Input, NgModule } from '@angular/core';
import { ForkTreeNode } from 'src/app/interfaces/fork-tree';

@Component({
  selector: 'app-fork-tree',
  templateUrl: './fork-tree.component.html',
  styleUrls: ['./fork-tree.component.scss'],
}
)

export class ForkTreeComponent {
  @Input()
  treeData: ForkTreeNode[] = [];
  newNodeName: string = '';

  addRootNode() {
    const newNode: ForkTreeNode = {
      id: this.treeData.length + 1,
      name: this.newNodeName,
      children: []
    };
    this.treeData.push(newNode);
    this.newNodeName = '';
  }

  addChildNode(parentNode: ForkTreeNode) {
    const newNode: ForkTreeNode = {
      id: parentNode.children ? parentNode.children.length + 1 : 1,
      name: `Child Node ${parentNode.children ? parentNode.children.length + 1 : 1}`
    };

    if (!parentNode.children) {
      parentNode.children = [];
    }

    parentNode.children.push(newNode);
  }
}
