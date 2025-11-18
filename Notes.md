// Build APK file
eas build --platform android --profile preview

gh issue list	List open issues for the current repository.	gh issue list
gh issue list -a @me	List issues assigned to you.	gh issue list -a @me
gh issue view <#>	View details of a specific issue by number.	gh issue view 123
gh issue close <#>	Close a specific issue.	gh issue close 123
gh issue reopen <#>	Reopen a closed issue.	gh issue reopen 123
gh issue comment <#>	Add a comment to an issue.	gh issue comment 123 -b "Reviewing this now"
gh issue create --title "" --body ""