(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"treeitemimage" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"class" :
														[
															{
																"grd_LF_menu" :
																{
																	"self" :
																	{
																		"collapse" :
																		{
																		},
																		"expand" :
																		{
																		}
																	}
																}
															}
														]
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"cell" :
			{
				"class" :
				[
					{
						"cell_gray" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"disabled" :
														{
														},
														"mouseover" :
														{
														},
														"focused" :
														{
														},
														"readonly" :
														{
														},
														"selected" :
														{
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				]
			}
		},
		{
			"includeStatusMap" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		
	};
}
)();
