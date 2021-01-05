import { Component, OnInit } from "@angular/core";
import { NodeService } from "./nodeservice";
import { TreeNode } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      :host ::ng-deep .ui-editing-cell {
        padding: 0 !important;
      }

      :host ::ng-deep .ui-toggler-column.ui-editing-cell {
        padding-left: 0.857em !important;
      }
    `
  ]
})
export class AppComponent {
  files: TreeNode[];

  cols: any[];

  rowData: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => (this.files = files));

    this.cols = [
      { field: "name", header: "Name" },
      { field: "size", header: "Size" },
      { field: "type", header: "Type" }
    ];
  }

  onEditComplete(event) {
    console.log("onEditComplete has been called " + event);
  }
}
