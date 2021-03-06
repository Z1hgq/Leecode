import {
    TreeNode,
    getPreorderTraversalRec,
    preorderTraversal,
    inorderTraversal,
    postorderTraversal,
    dfsRes,
    dfs,
    bfs,
    maxDepth,
    isBalancedBTree,
    maxPathSum,
    lowestCommonAncestor,
} from "./index";

const node = {
    val: 0,
    left: {
        val: 1,
        left: {
            val: 3,
            left: {
                val: 7,
                left: null,
                right: null,
            },
            right: {
                val: 8,
                left: null,
                right: null,
            },
        },
        right: {
            val: 4,
            left: {
                val: 9,
                left: null,
                right: null,
            },
            right: {
                val: 10,
                left: null,
                right: null,
            },
        },
    },
    right: {
        val: 2,
        left: {
            val: 5,
            left: {
                val: 11,
                left: null,
                right: null,
            },
            right: {
                val: 12,
                left: null,
                right: null,
            },
        },
        right: {
            val: 6,
            left: {
                val: 13,
                left: null,
                right: null,
            },
            right: {
                val: 14,
                left: null,
                right: null,
            },
        },
    },
};

console.log(`先序递归: `, getPreorderTraversalRec(node));
console.log(`先序非递归: `, preorderTraversal(node));
console.log(`中序遍历: `, inorderTraversal(node));
console.log(`后序遍历: `, postorderTraversal(node));
console.log(`递归深度优先遍历: `, dfsRes(node));
console.log(`分治深度优先遍历: `, dfs(node));
console.log(`广度优先遍历: `, bfs(node));
console.log(`二叉树最大深度: `, maxDepth(node));
console.log(`平衡二叉树: `, isBalancedBTree(node));
console.log(`最大路径: `, maxPathSum(node));
console.log(
    `最近的公共祖先: `,
    lowestCommonAncestor(
        node,
        {
            val: 8,
            left: null,
            right: null,
        },
        {
            val: 9,
            left: null,
            right: null,
        }
    )
);
