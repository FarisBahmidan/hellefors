import { Card } from "primereact/card"
import styles from "../../styles/scss/home/home.module.css"
import { useState } from "react";
import { TreeNode } from "primereact/treenode";
import { Tree, TreeDragDropEvent } from "primereact/tree";



export function PageSearch() {

    const [pageSrc, setPageSrc] = useState<string>("")
    const data: TreeNode[] = [
        {
            key: '_0',
            label: "topic 1",
            children: [
                {
                    label: "page 1",
                    key: "https://farisbahmidan.github.io/faris-cv/",
                },
                {
                    label: "page 2",
                    key: "https://yousuf.pro/",
                },
                {
                    label: "page 3",
                    key: "page 3",
                },
            ]
        },
        {
            key: '_1',
            label: "topic 2",
            children: [
                {
                    label: "page 4",
                    key: "page 4",
                },
                {
                    label: "page 5",
                    key: "page 5",
                },
                {
                    label: "page 6",
                    key: "page 6",
                },
            ]
        }
    ].map(value => {
        (value as TreeNode).style = {
            cursor: "default"
        }
        return value;
    })
    const [nodes, setNodes] = useState<TreeNode[]>(data);
    return (
        <div className={styles.pageSearch}>
            <div className={styles.titel}>
                <h1>Hitta Lät</h1>
            </div>
            <div className={styles.contact}>
                <div className={styles.left}>
                    <div className="card flex justify-content-center">
                        <Tree value={nodes} onNodeClick={e => {
                            const value = e.node.key as string
                            if (!value.startsWith("_")) {
                                setPageSrc(value);
                            }
                        }} filter dragdropScope="demo" onDragDrop={(e: TreeDragDropEvent) => setNodes(e.value as TreeNode[])} className="w-full md:w-30rem" />
                    </div>
                </div>
                <div style={{ position: "relative" }} className={styles.right}>
                    <a href={pageSrc} target="_blank" style={
                        {
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                        }}>
                        <iframe src={pageSrc} style={
                            {
                                width: "100%",
                                height: "100%",
                                border: "none",
                                outline: "none"
                            }} />
                    </a>

                </div>
            </div>
        </div>
    )
} 