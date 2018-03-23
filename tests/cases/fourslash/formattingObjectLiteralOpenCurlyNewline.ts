/// <reference path='fourslash.ts' />

//// 
//// var clear =
//// {
////     outerKey:
////     {
////         innerKey: 1
////     }
//// };
//// 

format.document();
verify.currentFileContentIs(
`
var clear =
{
    outerKey:
    {
        innerKey: 1
    }
};
`
);